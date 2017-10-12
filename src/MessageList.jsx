import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">

        {this.props.messages.map(msg => {
          return <Message key={msg.id} msg={msg} />
        })}
      </div>
    )
  }

}

export default MessageList;