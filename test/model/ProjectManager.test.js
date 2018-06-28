import ProjectManager, {
  Todo,
  InProgress,
  Done,
  Completed,
  Start,
  Finish,
  Archive
} from '../../src/model/ProjectManager';


describe("The Project Manager model", () => {
  it("is created with an empty task list", () => {
    let projectManager = new ProjectManager();
    expect(projectManager.tasks.length).toEqual(0);
  });

  describe("creating new tasks", () => {
    let projectManager = new ProjectManager();

    it("defaults to a state of `Todo`", () => {
      let task = projectManager.createNewTask('Add a lit button to the page', "Our pages aren't lit enough fam. We need to make them more lit", 1);
      expect(task.state).toBe(Todo);
    });

    it("defaults to a state of `Todo` if garbage is passed in", () => {
      let task = projectManager.createNewTask('Virus.exe', "Hax", "'or 1=1;select * from users");
      expect(task.state).toBe(Todo);
    });

    it("sets the state to In Progress", () => {
      let task = projectManager.createNewTask('Cats', 'Something something something cats sell stuff probably', InProgress);
      expect(task.state).toBe(InProgress);
    });

    it("sets the state to Done", () => {
      let task = projectManager.createNewTask('Filters', 'Putting filters on things will save our product I bet', Done);
      expect(task.state).toBe(Done);
    });

    it("sets the state to Completed", () => {
      let task = projectManager.createNewTask('Influencers', 'I keep hearing this term, we should explore it in our app.', Completed);
      expect(task.state).toBe(Completed);
    });

    it("automatically default increments the id by the length of the tasks array + 1 if no id is passed in", () => {
      let projectManager = new ProjectManager();
      let task = projectManager.createNewTask('More gifs', 'The kids like gifs. Make more of them and add them somewhere');

      expect(task.id).toEqual(1);

      projectManager.tasks = new Array(10).fill({});
      task = projectManager.createNewTask('Less gifs', "The kids don't like gifs as much as we thought. Get rid of them");

      expect(task.id).toEqual(11);
    });
  });

  describe("filtering based on task type using `buildDefaultTasks`", () => {
    let projectManager = new ProjectManager;
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

      projectManager.tasks.push(projectManager.createNewTask('Name 8', 'Some description 8', Completed));
      expect(projectManager.completedTasks.length).toEqual(1);
    });
  });
});
