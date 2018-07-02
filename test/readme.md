## Test Results

```
The Project Manager model
  ✓ is created with an empty task list
  creating new tasks
    ✓ defaults to a state of `Todo`
    ✓ defaults to a state of `Todo` if garbage is passed in
    ✓ sets the state to In Progress
    ✓ sets the state to Done
    ✓ sets the state to Completed
    ✓ automatically default increments the id by the length of the tasks array + 1 if no id is passed in
  filtering based on task type using `buildDefaultTasks`
    ✓ has the proper number of Todo tickets
    ✓ has the proper number of In Progress tickets
    ✓ has the proper number of Done tickets
    ✓ has the proper number of Completed tickets
  transitioning a task
    ✓ does nothing if it cannot find the task
    ✓ transitions tasks from Todo to In Progress
    ✓ transitions tasks from In Progress to Done
    ✓ transitions tasks from Done to Completed
```
