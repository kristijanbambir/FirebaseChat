import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { firebaseSignIn } from '../../../core/firebase';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn() {
    firebaseSignIn();
  }

  render() {
    return (
      <RaisedButton
        label='Sign in'
        onTouchTap={this.handleSignIn}
      />
    );
  }

}

SignIn.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(SignIn);
