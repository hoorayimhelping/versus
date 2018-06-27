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

const MachineFactory = StateMachine.factory(defaultTaskStateMachineParameters);

class ProjectManager {
  constructor(TaskStateMachine = MachineFactory) {
    this.TaskStateMachine = TaskStateMachine;
    this.tasks = [];
  }

  createNewTask(id, name, description, state = Todo) {
    const { TaskStateMachine } = this;
    const taskStateMachine = new TaskStateMachine();

    if (state !== Todo) {
      // the machine will default to Todo, so if this method receives garbage input, it can just be ignored
      // otherwise, transition the machine to the state set by the user
      if (([InProgress, Done, Completed].includes(state))) {
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
      }
    }

    return new Task(taskStateMachine, id, name, description);
  }

  // this method doesn't really belong here, but the use case is kind of not-typical.
  // in real life (irl) these default values would come from some external data provider that this module could interface with
  // and make requests to to get the canonical state and this method would concern itself with fetching the state.
  // that's a bit out of scope for this, so this method will stand in
  buildDefaultTasks() {
    return [
      this.createNewTask(1, 'Name 1', 'Some description 1', Todo),
      this.createNewTask(2, 'Name 2', 'Some description 2', Todo),
      this.createNewTask(3, 'Name 3', 'Some description 3', Todo),
      this.createNewTask(4, 'Name 4', 'Some description 4', Todo),
      this.createNewTask(5, 'Name 5', 'Some description 5', InProgress),
      this.createNewTask(6, 'Name 6', 'Some description 6', InProgress),
      this.createNewTask(7, 'Name 7', 'Some description 7', Done)
    ];
}
}

export default ProjectManager;
