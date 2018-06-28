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

* Use the following URL to seed the initial application data - https://private-caaa7-versustracker.apiary-mock.com/tasks :heavy_check_mark:

* Please review the mockups (attached) for how we would like it structured

* When adding a new task the dialog is a modal that appears on top of the existing UI

* New tasks default to the TODO state :heavy_check_mark:

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

* comments: I've added some comments throughout the code explaining my thought process and concerns / thoughts about potential future issues. Normally I'd write comments to add context to my code (typically justification for weird code by explaining business cases), but in this case, I'm trying to give insight into my thought process. Just want to let y'all know where my head's at.

* prod vs dev dependencies: I decided to add everything as a prod dependency for this simple assignment since the prod and dev workflows aren't that different and it's an example. When starting a real project, this is something we'd take the time to think about, but it's not all _that_ important here
