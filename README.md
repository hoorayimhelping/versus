# Versus Take Home Test

## Assignment

**As a user working on a project I can add new tasks and transition those tasks to multiple states, so that I can track the work I need to do.**

*Required Features:*

* Ability to add new tasks to a project

* Ability to move Tasks from Todo -> In Progress 

* Ability to move Tasks from In Progress -> Complete  

* Ability to move Tasks from Complete -> Archive

* When a Task is archived it is no longer in view

*Acceptance Criteria:*

* Use the following URL to seed the initial application data - https://private-caaa7-versustracker.apiary-mock.com/tasks

* Please review the mockups (attached) for how we would like it structured

* When adding a new task the dialog is a modal that appears on top of the existing UI

* New tasks default to the TODO state

* Please use Material-UI (http://www.material-ui.com/#/) for standard UI components, feel free to pull in any other dependencies else you may need :heavy_check_mark:


---

## Running

### Installation
(requires [**yarn**](https://yarnpkg.com/lang/en/))

Display makefile help menu
```bash
make [help]
```

Build app
```bash
make build
```

Lint app
```bash
make lint
```

Test app
```bash
make test
```
---


## Notes

* prod vs dev dependencies: I decided to add everything as a prod dependency for this simple assignment since the prod and dev workflows aren't that different and it's an example. When starting a real project, this is something we'd take the time to think about, but it's not all _that_ important here
