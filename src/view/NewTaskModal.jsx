import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

let modalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

let styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

let NewTaskModal = props => {
  return (
    <Modal open={props.isOpen} onClose={props.handleClose}>
      <div style={modalStyle} className={props.classes.paper}>
        <Typography variant="title" id="modal-title">Add New Task</Typography>

        <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
          <TextField id="name" label="Name" margin="normal" />
          <TextField id="description" label="Description" margin="normal" />
          <Button variant="contained" color="primary">Add Task</Button>
        </form>
      </div>
    </Modal>
  );
};

NewTaskModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default withStyles(styles)(NewTaskModal);
