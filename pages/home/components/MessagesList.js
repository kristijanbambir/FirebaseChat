import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import Message from './Message';

class MessagesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifyNewMessage: false,
    };
    this.shouldScrollBottom = true;
  }

  componentWillUpdate() {
    this.shouldScrollBottom = this.isScrolledToBottom();
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  render() {
    let content;
    if (this.props.messages.length === 0) {
      content = (
        <Message
          key='0'
          text='Loading messages'
        />
      );
    } else {
      content = this.props.messages.map(message => (
        <Message key={message.key} {...message} />
      ));
    }
    return (
      <List>
        {content}
      </List>
    );
  }

}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { values: messages = [] } = state.messages;
  return {
    messages,
  };
};

export default connect(mapStateToProps)(MessagesList);
