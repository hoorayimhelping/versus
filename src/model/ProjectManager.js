import StateMachine from 'javascript-state-machine';

export const Todo = Symbol('Todo');
export const InProgress = Symbol('In Progress');
export const Done = Symbol('Done');
export const Archive = Symbol('Archive');

// kind of awkwardly named eh?
export const todoToInProgressName = Symbol('Start');
export const inProgressToDoneName = Symbol('Finish');
export const doneToArchiveName = Symbol('Archive');

const defaultStateMachineParameters = {
  init: Todo,
  transitions: [
    { name: todoToInProgressName, from: Todo, to: InProgress },
    { name: inProgressToDoneName, from: InProgress, to: Done },
    { name: doneToArchiveName, from: Done, to: Archive }
  ],
  methods: {}
};

const defaultStateMachine = new StateMachine(defaultStateMachineParameters);

class ProjectManager {
  construct(stateMachine) {
    this.stateMachine = stateMachine;
  }
}

export default ProjectManager;
