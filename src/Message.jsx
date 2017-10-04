import React, {Component} from 'react';

<div class="message system">
    Anonymous1 changed their name to nomnom.
</div>

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <main className="messages">
          <div className="message">
            <span className="message-username">{this.props.username}</span>
            <span className="message-content">{this.props.content}</span>
          </div>
        </main>

    )
  }
}
export default Message;