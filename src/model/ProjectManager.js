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

  static CreateNewTask(fsm, id, name, description, state = Todo) {
    if (state !== Todo) {
      // the machine will default to Todo, so if this method receives garbage input, it can just be ignored
      // otherwise, transition the machine to the state set by the user
      if (([InProgress, Done, Completed].includes(state))) {
        switch (state) {
          case InProgress:
            fsm.start();
            break;
          case Done:
            fsm.start();
            fsm.finish();
            break;
          case Completed:
            fsm.start();
            fsm.finish();
            fsm.archive();
            break;
        }
      }
    }

    const task = new Task(fsm, id, name, description);
    return task;
  }

  BuildDefaultTasks() {
    return [
      ProjectManager.CreateNewTask(new this.TaskStateMachine(), 1, 'Name 1', 'Some description 1', Todo),
      ProjectManager.CreateNewTask(new this.TaskStateMachine(), 2, 'Name 2', 'Some description 2', Todo),
      ProjectManager.CreateNewTask(new this.TaskStateMachine(), 3, 'Name 3', 'Some description 3', Todo),
      ProjectManager.CreateNewTask(new this.TaskStateMachine(), 4, 'Name 4', 'Some description 4', Todo),
      ProjectManager.CreateNewTask(new this.TaskStateMachine(), 5, 'Name 5', 'Some description 5', InProgress),
      ProjectManager.CreateNewTask(new this.TaskStateMachine(), 6, 'Name 6', 'Some description 6', InProgress),
      ProjectManager.CreateNewTask(new this.TaskStateMachine(), 7, 'Name 7', 'Some description 7', Done)
    ];
}
}

export default ProjectManager;
