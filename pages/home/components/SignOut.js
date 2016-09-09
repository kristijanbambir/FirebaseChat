import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { firebaseSignOut } from '../../../core/firebase';

class SignOut extends Component {

  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    firebaseSignOut();
  }

  render() {
    return (
      <FlatButton
        label='Sign out'
        labelStyle={{
          color: this.context.muiTheme.appBar.textColor,
        }}
        onTouchTap={this.handleSignOut}
        style={{
          marginTop: '6px',
        }}
      />
    );
  }

}

SignOut.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

SignOut.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(SignOut);
