import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

let styles = theme => ({});

let Task = props => {
  let { task } = props;
  return (
    <ListItem key={`task-${task.id}`}>
      <Paper>{task.id} - {task.name}: {task.description}</Paper>
    </ListItem>
  );
};

Task.propTypes = {
  classes: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired
};

export default withStyles(styles)(Task);
