import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import Paper from 'material-ui/Paper';
import { messagesRef } from '../../../utils/firebase';

class SendMessage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageValue: '',
    };
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleMessageChange(event) {
    this.setState({
      messageValue: event.target.value,
    });
  }

  handleSend() {
    messagesRef.push({
      createdAt: new Date().getTime(),
      name: this.props.name,
      photoUrl: this.props.photoUrl,
      text: this.state.messageValue,
    });
    this.setState({
      messageValue: '',
    });
  }

  render() {
    return (
      <Paper
        style={{
          bottom: '0',
          display: 'flex',
          left: '0',
          padding: '10px 20px',
          position: 'fixed',
          width: '100%',
        }}
      >
        <TextField
          hintText='Send a message'
          style={{
            width: '100%',
          }}
          onChange={this.handleMessageChange}
          value={this.state.messageValue}
        />
        <IconButton
          onTouchTap={this.handleSend}
          style={{
            borderBottom: `solid 1px ${this.context.muiTheme.textField.borderColor}`,
            float: 'right',
            bottom: '8px',
          }}
        >
          <ContentSend />
        </IconButton>
      </Paper>
    );
  }

}

SendMessage.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

SendMessage.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { auth } = state;
  const { displayName: name, photoURL: photoUrl } = auth ? auth.user : {};
  return {
    name,
    photoUrl,
  };
};

export default connect(mapStateToProps)(SendMessage);
