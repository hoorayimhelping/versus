import { Archive, Finish, Start, Todo } from './ProjectManager';

class Task {
  constructor(taskStateMachine, id, name, description) {
    this.taskStateMachine = taskStateMachine;
    this.id = id;
    this.name = name;
    this.description = description;
  }

  move() {
    switch(this.transitionName) {
      case Start:
        this.taskStateMachine.start();
        break;
      case Finish:
        this.taskStateMachine.finish();
        break;
      case Archive:
        this.taskStateMachine.archive();
        break;
    }
  }

  get transitionName() {
    // for this simple test, we only have one transition and this method returns an array
    return this.taskStateMachine.transitions()[0];
  }

  get state() {
    return this.taskStateMachine.state;
  }
}

export default Task;
