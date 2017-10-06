import React, {Component} from 'react';

  class ChatBar extends Component {

    submitMessage = (e) => {
      if (e.key === 'Enter') {
        this.props.uploadMessage(e.target.value);
      }
    }

    render() {
      return (
        <footer className="chatbar">
           <input className="chatbar-username" placeholder="Your Name (Optional)" />
           <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={this.submitMessage} />
        </footer>
      )
    }
  }
 export default ChatBar;