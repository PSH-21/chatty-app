import React, {Component} from 'react';

// <div class="message system">
//     Anonymous1 changed their name to nomnom.
// </div>

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const msg = this.props.msg;
    // if ()
    //   return (<div)
    // else
    return (
      <main className="messages">
        <div className="message">
          { msg.type=='incomingNotification' && msg.oldName &&
            <span><i>{msg.oldName} changed their name to {msg.username}</i></span>
          }
          { !msg.oldName &&
            <div>
            <span className="message-username">{msg.username}</span>
            <span className="message-content">{msg.content}</span>
            </div>
          }
        </div>
      </main>

    )
  }
}
export default Message;