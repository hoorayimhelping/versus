import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TaskList from './TaskList';
import NewTaskModal from './NewTaskModal';

let styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class ProjectManagement extends React.Component {
  constructor(props) {
    super(props);

    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleNewTaskClick = this.handleNewTaskClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = { newTaskModelIsOpen: false };
  }

  handleModalSubmit(name, description) {
    this.setState({
      newTaskModelIsOpen: false
    });

    this.props.projectManager.addTask(name, description);
  }

  handleNewTaskClick(event) {
    event.preventDefault();
    this.setState({
      newTaskModelIsOpen: true
    });
  }

  handleModalClose(event) {
    event.preventDefault();
    this.setState({
      newTaskModelIsOpen: false
    });
  }

  render() {
    let { classes, projectManager } = this.props;

    return (
      <div className={classes.root}>
        <NewTaskModal isOpen={this.state.newTaskModelIsOpen} handleClose={this.handleModalClose} handleSubmit={this.handleModalSubmit} />
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item xs align="center">
            <Button variant="contained" color="default" onClick={this.handleNewTaskClick}>Add Task</Button>
          </Grid>
          <Grid item xs={8}>
            <TaskList projectManager={projectManager} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

ProjectManagement.propTypes = {
  projectManager: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectManagement);
