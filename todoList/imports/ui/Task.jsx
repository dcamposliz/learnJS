import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Tasks } from '../api/tasks.js';

// TASK REACT COMPONENT - represents a single todo item

export default class Task extends Component {

  toggleChecked() {
    // set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate(){
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  render () {
    // give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
      { this.props.showPrivateButton ? (
        <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
          { this.props.task.private ? 'Private' : 'Public' }
        </button>
      ) : ''}
        <span className="text">
          <strong>{this.props.task.username}</strong>: { this.props.task.text }
        </span>
      </li>
    );
  }
}

Task.propTypes = {
  // this component gets the task to display though a React prop.
  // we can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired,
};
