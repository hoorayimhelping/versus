import React from "react";
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Task from './Task';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(taskId) {
    this.props.projectManager.transitionTask(taskId);

    // we want to call `forceUpdate` here because the state of the projectManager has changed,
    // but it doesn't get picked up as a prop change, so a re-render needs to be explicitly called
    // this might also be accomplished by inspecting the state of the projectManager on `shouldComponentUpdate`
    // but this is probably simpler and more straightforward
    this.forceUpdate();
  }

  render () {
    let { projectManager } = this.props;

    return (
      <Grid container>
        <Grid item xs>
          <Typography variant="display1" gutterBottom align="center">
            Todo
          </Typography>
          <List>
            {projectManager.todoTasks.map(task => (<Task task={task} key={`task-${task.name}-${task.id}`} onClick={this.handleClick} />))}
          </List>
        </Grid>
        <Grid item xs>
          <Typography variant="display1" gutterBottom align="center">
            In Progress
          </Typography>
          <List>
            {projectManager.inProgressTasks.map(task => (<Task task={task} key={`task-${task.name}-${task.id}`} onClick={this.handleClick} />))}
          </List>
        </Grid>
        <Grid item xs>
          <Typography variant="display1" gutterBottom align="center">
            Done
          </Typography>
          <List>
            {projectManager.doneTasks.map(task => (<Task task={task} key={`task-${task.name}-${task.id}`} onClick={this.handleClick} />))}
          </List>
        </Grid>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  projectManager: PropTypes.object.isRequired
};

export default TaskList;
