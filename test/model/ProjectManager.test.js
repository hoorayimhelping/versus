import ProjectManager, {
  Todo,
  InProgress,
  Done,
  Completed
} from '../../src/model/ProjectManager';


describe("The Project Manager model", () => {
  it("is created with an empty task list", () => {
    let projectManager = new ProjectManager();
    expect(projectManager.tasks.length).toEqual(0);
  });

  describe("creating new tasks", () => {
    let projectManager = new ProjectManager();

    it("defaults to a state of `Todo`", () => {
      projectManager.addTask('Add a lit button to the page', "Our pages aren't lit enough fam. We need to make them more lit", 1);
      let task = projectManager.tasks[projectManager.tasks.length - 1];
      expect(task.state).toBe(Todo);
    });

    it("defaults to a state of `Todo` if garbage is passed in", () => {
      projectManager.addTask('Virus.exe', "Hax", "'or 1=1;select * from users");
      let task = projectManager.tasks[projectManager.tasks.length - 1];
      expect(task.state).toBe(Todo);
    });

    it("sets the state to In Progress", () => {
      projectManager.addTask('Cats', 'Something something something cats sell stuff probably', InProgress);
      let task = projectManager.tasks[projectManager.tasks.length - 1];
      expect(task.state).toBe(InProgress);
    });

    it("sets the state to Done", () => {
      projectManager.addTask('Filters', 'Putting filters on things will save our product I bet', Done);
      let task = projectManager.tasks[projectManager.tasks.length - 1];
      expect(task.state).toBe(Done);
    });

    it("sets the state to Completed", () => {
      projectManager.addTask('Influencers', 'I keep hearing this term, we should explore it in our app.', Completed);
      let task = projectManager.tasks[projectManager.tasks.length - 1];
      expect(task.state).toBe(Completed);
    });

    it("automatically default increments the id by the length of the tasks array + 1 if no id is passed in", () => {
      let projectManager = new ProjectManager();
      projectManager.addTask('More gifs', 'The kids like gifs. Make more of them and add them somewhere');
      let task = projectManager.tasks[projectManager.tasks.length - 1];

      expect(task.id).toEqual(1);

      projectManager.tasks = new Array(10).fill({});
      projectManager.addTask('Less gifs', "The kids don't like gifs as much as we thought. Get rid of them");
      task = projectManager.tasks[projectManager.tasks.length - 1];

      expect(task.id).toEqual(11);
    });
  });

  describe("filtering based on task type using `buildDefaultTasks`", () => {
    let projectManager = new ProjectManager();
    projectManager.tasks = projectManager.buildDefaultTasks();

    it("has the proper number of Todo tickets", () => {
      expect(projectManager.todoTasks.length).toEqual(4);
    });

    it("has the proper number of In Progress tickets", () => {
      expect(projectManager.inProgressTasks.length).toEqual(2);
    });

    it("has the proper number of Done tickets", () => {
      expect(projectManager.doneTasks.length).toEqual(1);
    });

    it("has the proper number of Completed tickets", () => {
      expect(projectManager.completedTasks.length).toEqual(0);

      projectManager.addTask('Name 8', 'Some description 8', Completed);
      expect(projectManager.completedTasks.length).toEqual(1);
    });
  });

  describe("transitioning a task", () => {
    let projectManager;

    beforeEach(() => {
      projectManager = new ProjectManager();
      projectManager.tasks = projectManager.buildDefaultTasks();
    });

    it("does nothing if it cannot find the task", () => {
      expect(projectManager.todoTasks.length).toEqual(4);
      expect(projectManager.inProgressTasks.length).toEqual(2);
      expect(projectManager.doneTasks.length).toEqual(1);
      expect(projectManager.completedTasks.length).toEqual(0);

      projectManager.transitionTask(34234234);

      expect(projectManager.todoTasks.length).toEqual(4);
      expect(projectManager.inProgressTasks.length).toEqual(2);
      expect(projectManager.doneTasks.length).toEqual(1);
      expect(projectManager.completedTasks.length).toEqual(0);
    });

    it("transitions tasks from Todo to In Progress", () => {
      expect(projectManager.todoTasks.length).toEqual(4);
      expect(projectManager.inProgressTasks.length).toEqual(2);

      projectManager.transitionTask(1);

      expect(projectManager.todoTasks.length).toEqual(3);
      expect(projectManager.inProgressTasks.length).toEqual(3);
    });

    it("transitions tasks from In Progress to Done", () => {
      expect(projectManager.inProgressTasks.length).toEqual(2);
      expect(projectManager.doneTasks.length).toEqual(1);

      projectManager.transitionTask(5);

      expect(projectManager.inProgressTasks.length).toEqual(1);
      expect(projectManager.doneTasks.length).toEqual(2);
    });

    it("transitions tasks from Done to Completed", () => {
      expect(projectManager.doneTasks.length).toEqual(1);
      expect(projectManager.completedTasks.length).toEqual(0);

      projectManager.transitionTask(7);

      expect(projectManager.doneTasks.length).toEqual(0);
      expect(projectManager.completedTasks.length).toEqual(1);
    });
  });
});
