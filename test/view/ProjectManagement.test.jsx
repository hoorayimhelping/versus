import React from 'react';
import { shallow } from 'enzyme';

import ProjectManagement from '../../src/view/ProjectManagement';

let fakeProjectManager = {
  completedTasks: [],
  completedTasks: [],
  inProgressTasks: [],
  todoTasks: []
};

describe("The ProjectManagement component", () => {
  describe("the New Task modal", () => {
    it("is initially closed", () => {
      let wrapper = shallow(<ProjectManagement projectManager={fakeProjectManager} />).dive();
      expect(wrapper.state('newTaskModalIsOpen')).toEqual(false);
    });

    it("opens afer clicking the new task + sign", () => {
      let wrapper = shallow(<ProjectManagement projectManager={fakeProjectManager} />).dive();
      wrapper.find('#new-task').simulate('click', { preventDefault: jest.fn() });
      expect(wrapper.state('newTaskModalIsOpen')).toEqual(true);
    });
  });
});
