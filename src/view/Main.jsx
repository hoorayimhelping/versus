import React from "react";
import ReactDOM from "react-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from './Container';

ReactDOM.render((
  <React.Fragment>
    <CssBaseline />
    <Container />
  </React.Fragment>),
  document.getElementById('app')
);
