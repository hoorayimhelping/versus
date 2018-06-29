import React from "react";
import PropTypes from 'prop-types';

import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Tasks from './Tasks';
import NewTaskModal from './NewTaskModal';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleNewTaskClick = this.handleNewTaskClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = { newTaskModelIsOpen: false };
  }

  handleModalSubmit(name, description) {
    console.log('submit', name, description);

    this.setState({
      newTaskModelIsOpen: false
    });
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
      <div>
        <NewTaskModal isOpen={this.state.newTaskModelIsOpen} handleClose={this.handleModalClose} handleSubmit={this.handleModalSubmit} />
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper elevation={1}>
              <Button onClick={this.handleNewTaskClick}>Add Task</Button>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Tasks projectManager={projectManager} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

Container.propTypes = {
  projectManager: PropTypes.object.isRequired
};

export default Container;
