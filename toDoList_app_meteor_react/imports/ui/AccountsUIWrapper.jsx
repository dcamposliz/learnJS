import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    // use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // clean up blaze view
    Blaze.remove(this.view);
  }
  render() {
    // just render a placeholder container that will be filed in
    return <span ref="container" />
  }
}
