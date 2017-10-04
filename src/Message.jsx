import React, {Component} from 'react';

<div class="message system">
    Anonymous1 changed their name to nomnom.
</div>

class Message extends Component {
  render() {
    return (
       <main className="messages">
          <div class="message">
            <span className="message-username">Anonymous1</span>
            <span className="message-content">I won't be impressed with technology until I can download food.</span>
          </div>
        </main>

    )
  }
}
export default Message;