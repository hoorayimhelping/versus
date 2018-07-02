import React from 'react';
import { mount } from 'enzyme';

import TaskList from '../../src/view/TaskList';
import ProjectManager from '../../src/model/ProjectManager';

const projectManager = new ProjectManager();
projectManager.tasks = projectManager.buildDefaultTasks();

describe("The TaskList component", () => {
  it("has a default state", () => {
    let wrapper = mount(<TaskList projectManager={projectManager} />);

    expect(wrapper.find('#todo-list').find('li').length).toEqual(4);
    expect(wrapper.find('#in-progress-list').find('li').length).toEqual(2);
    expect(wrapper.find('#done-list').find('li').length).toEqual(1);
  });

  it("updates the columns (or swimlanes if that's your thing) when the state of the task list changes", done => {
    let wrapper = mount(<TaskList projectManager={projectManager} />);
    wrapper.instance().handleClick(1);

    // not sure why this needs to be called here when the component calls forceUpdate(), but it seems to need to be ¯\_(ツ)_/¯
    wrapper.update();
    setTimeout(() => {
      expect(wrapper.find('#todo-list').find('li').length).toEqual(3);
      expect(wrapper.find('#in-progress-list').find('li').length).toEqual(3);
      done();
    }, 25);
  });
});
