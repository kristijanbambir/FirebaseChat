import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import MessagesList from './components/MessagesList';
import SendMessage from './components/SendMessage';
import SignIn from './components/SignIn';

class HomePage extends Component {

  componentDidMount() {
    document.title = 'Friendly Chat';
  }

  render() {
    let main;
    if (this.props.user) {
      main = (
        <div>
          <MessagesList />
          <SendMessage />
          <div style={{ height: '68px', width: '100%' }} />
        </div>
      );
    } else {
      main = (
        <div
          style={{
            marginTop: '30px',
            textAlign: 'center',
          }}
        >
          <SignIn />
        </div>
      );
    }

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          style={{
            position: 'fixed',
          }}
          title='Friendly Chat'
        />
        <div style={{ height: '64px', width: '100%' }} />
        {main}
      </div>
    );
  }

}

HomePage.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { auth } = state;
  const user = auth ? auth.user : null;
  return {
    user,
  };
};

export default connect(mapStateToProps)(HomePage);
