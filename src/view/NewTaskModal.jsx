import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';


import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

let modalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

let styles = theme => ({
  closeButton: {
    top: '-25%',
    verticalAlign: 'top'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class NewTaskModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);

    this.state = {
      name: '',
      description: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // basic simple validation to make sure there is some kind of value
    if (this.state.name === '' || this.state.description === '') {
      return;
    }

    this.props.handleSubmit(this.state.name, this.state.description);

    this.setState({
      name: '',
      description: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    let { classes, handleClose, isOpen } = this.props;

    return (
      <Modal open={isOpen} onClose={handleClose}>
        <Paper style={modalStyle} className={classes.paper}>
          <Grid container>
            <Grid item xs>
              <Typography variant="title" id="modal-title">Add New Task</Typography>
            </Grid>
            <Grid item xs align="right">
              <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}><CloseIcon /></IconButton>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <form noValidate autoComplete="off" onSubmit={this.handleSubmit} className={classes.form}>
                <Grid container>
                  <Grid item xs>
                    <TextField id="name" label="Name" margin="normal" fullWidth value={this.state.name} onChange={this.updateName}/>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <TextField id="description" label="Description" margin="normal" fullWidth value={this.state.description} onChange={this.updateDescription} />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs align="right">
                    <Button variant="contained" color="primary" type="submit">Add Task</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    );
  }
};

NewTaskModal.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default withStyles(styles)(NewTaskModal);
