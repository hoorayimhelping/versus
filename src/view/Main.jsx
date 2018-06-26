import React from "react";
import ReactDOM from "react-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from './Container';

import ProjectManager from '../model/ProjectManager';

let manager = new ProjectManager();

ReactDOM.render((
  <React.Fragment>
    <CssBaseline />
    <Container />
  </React.Fragment>),
  document.getElementById('app')
);
