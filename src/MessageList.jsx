import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          id: 579318,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 579319,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };

  }

  render() {
    return (
      <div className="message-list">
        {this.state.messages.map(item => {
          return <Message username={item.username} content={item.content} key={item.id} />

        })}
      </div>
    )
  }

}

export default MessageList;