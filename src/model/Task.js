class Task {
  constructor(taskStateMachine, id, name, description) {
    this.taskStateMachine = taskStateMachine;
    this.id = id;
    this.name = name;
    this.description = description;
  }

  get transitionName() {
    // for this simple assignment, we only have one transition and this method returns an array
    return this.taskStateMachine.transitions()[0];
  }

  get state() {
    return this.taskStateMachine.state;
  }
}

export default Task;
