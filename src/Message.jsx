import React, {Component} from 'react';

// <div class="message system">
//     Anonymous1 changed their name to nomnom.
// </div>

export default class Message extends Component {

  renderMessage() {
    const { username, content } = this.props;
    return (
      <div className="message">
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
    )
  }

  renderNotification() {
    const { content } = this.props;
    return (
      <div className="message system">
        <span className="message-content">{content}</span>
      </div>
    );
  }

  render() {
    const { type } = this.props;
    switch(type) {
      case 'incomingMessage': return this.renderMessage();
      case 'incomingNotification': return this.renderNotification();
      default:
        console.error(`Attempting to render a message of unknown type: ${type}`);
        return null;
    }
  }
}