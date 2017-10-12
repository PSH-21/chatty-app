import React, {Component} from 'react';
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    return (
      <main className="message-list">
        {
          this.props.messages.map(msg => <Message key={msg.id} {...msg} />)
        }
      </main>
    )
  }
}
