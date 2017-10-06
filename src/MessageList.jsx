import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map(item => {
          return <Message username={item.username} content={item.content} key={item.id} />

        })}
      </div>
    )
  }

}

export default MessageList;