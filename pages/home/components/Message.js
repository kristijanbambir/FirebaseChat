import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const Message = props => (
  <ListItem
    primaryText={props.text}
    secondaryText={props.name}
    leftAvatar={<Avatar src={props.photoUrl} />}
    disabled
  />
);

Message.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Message;
