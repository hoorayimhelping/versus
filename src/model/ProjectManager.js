import StateMachine from 'javascript-state-machine';

import Task from './Task';

export const Todo = 'Todo';
export const InProgress = 'In Progress';
export const Done = 'Done';
export const Completed = 'Completed';

export const Start = 'Start';
export const Finish = 'Finish';
export const Archive = 'Archive';

const defaultTaskStateMachineParameters = {
  init: Todo,
  transitions: [
    { name: Start, from: Todo, to: InProgress },
    { name: Finish, from: InProgress, to: Done },
    { name: Archive, from: Done, to: Completed }
  ]
};

let MachineFactory = StateMachine.factory(defaultTaskStateMachineParameters);

// passing in the id is silly, but it simulates having some external id service (like an auto incrementing column in a db) here
// in real life, we'd obviously have some canonical source of truth handling this on the backend
let createNewTask = function(name, description, state = Todo, id) {
  let { TaskStateMachine } = this;
  let taskStateMachine = new TaskStateMachine();

  if (state !== Todo) {
    /*
     * the machine will default to Todo, so if this method receives garbage input, it can just be ignored
     * otherwise, transition the machine to the state set by the user
     * the library i'm using doesn't let you just transition to an arbitrary state
     * so you have to go through each state. since this is just a small test, this probably isn't a big deal
     * but it might cause problems for analytics in the future. if we wanted to track the number of tickets that
     * get created post-hoc and put into a completed state for example, this might throw that off because these
     * tickets might look like they've gone through the whole process.
     **/
    if (([InProgress, Done, Completed].includes(state))) {
      // we don't want a default case if the state change request is bad or malicious
      /* eslint-disable default-case */
      switch (state) {
        case InProgress:
          taskStateMachine.start();
          break;
        case Done:
          taskStateMachine.start();
          taskStateMachine.finish();
          break;
        case Completed:
          taskStateMachine.start();
          taskStateMachine.finish();
          taskStateMachine.archive();
          break;
      }
      /* eslint-enable default-case */
    }
  }

  return new Task(taskStateMachine, id, name, description);
};

class ProjectManager {
  constructor(TaskStateMachine = MachineFactory) {
    this.TaskStateMachine = TaskStateMachine;
    this.tasks = [];

    createNewTask = createNewTask.bind(this);
  }

  get todoTasks() {
    return this.tasks.filter(task => task.state === Todo);
  }

  get inProgressTasks() {
    return this.tasks.filter(task => task.state === InProgress);
  }

  get doneTasks() {
    return this.tasks.filter(task => task.state === Done);
  }

  get completedTasks() {
    return this.tasks.filter(task => task.state === Completed);
  }

  addTask(name, description, state = Todo) {
    this.tasks.push(createNewTask(name, description, state, this.tasks.length + 1));
  }

  transitionTask(taskId) {
    // taskId might be a string, so a less strict check is preferred
    let task = this.tasks.find(task => task.id == taskId); // eslint-disable-line eqeqeq

    if (task && task.transitionName) {
      // we don't want a default case if the state change request is bad or malicious
      /* eslint-disable default-case */
      switch(task.transitionName) {
        case Start:
          task.taskStateMachine.start();
          break;
        case Finish:
          task.taskStateMachine.finish();
          break;
        case Archive:
          task.taskStateMachine.archive();
          break;
      }
      /* eslint-enable default-case */
    }
  }

  /*
   * this method doesn't really belong here, but the use case is kind of not-typical.
   * in real life (irl) these default values would come from some external data provider that this module could interface with
   * and make requests to to get the canonical state. this method would concern itself with fetching that state.
   * that's a bit out of scope for this, so this method will stand in for that process
   **/
  buildDefaultTasks() {
    return [
      createNewTask('Name 1', 'Some description 1', Todo, 1),
      createNewTask('Name 2', 'Some description 2', Todo, 2),
      createNewTask('Name 3', 'Some description 3', Todo, 3),
      createNewTask('Name 4', 'Some description 4', Todo, 4),
      createNewTask('Name 5', 'Some description 5', InProgress, 5),
      createNewTask('Name 6', 'Some description 6', InProgress, 6),
      createNewTask('Name 7', 'Some description 7', Done, 7)
    ];
}
}

export default ProjectManager;
