import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TaskList from './TaskList';
import NewTaskModal from './NewTaskModal';

let styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  }
});

class ProjectManagement extends React.Component {
  constructor(props) {
    super(props);

    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleNewTaskClick = this.handleNewTaskClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = { newTaskModalIsOpen: false };
  }

  handleModalSubmit(name, description) {
    this.setState({
      newTaskModalIsOpen: false
    });

    this.props.projectManager.addTask(name, description);
  }

  handleNewTaskClick(event) {
    event.preventDefault();
    this.setState({
      newTaskModalIsOpen: true
    });
  }

  handleModalClose(event) {
    event.preventDefault();
    this.setState({
      newTaskModalIsOpen: false
    });
  }

  render() {
    let { classes, projectManager } = this.props;

    return (
      <div className={classes.root}>
        <NewTaskModal isOpen={this.state.newTaskModalIsOpen} handleClose={this.handleModalClose} handleSubmit={this.handleModalSubmit} />
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item xs align="center">
            <Typography variant="title">
              Add Task
              <Button id="new-task" variant="fab" color="primary" aria-label="add" className={classes.button} onClick={this.handleNewTaskClick}><AddIcon /></Button>
            </Typography>
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
  classes: PropTypes.object.isRequired,
  projectManager: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectManagement);
