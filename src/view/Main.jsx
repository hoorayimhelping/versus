import React from "react";
import ReactDOM from "react-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from './Container';

import ProjectManager, { Todo, InProgress, Done, Completed } from '../model/ProjectManager';


const manager = new ProjectManager();
manager.tasks = manager.buildDefaultTasks();

ReactDOM.render((
  <React.Fragment>
    <CssBaseline />
    <Container />
  </React.Fragment>),
  document.getElementById('app')
);
