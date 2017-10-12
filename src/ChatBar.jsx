import React, {Component} from 'react';

  class ChatBar extends Component {

    submitName = (e) => {
      if (e.key === 'Enter') {
        this.props.updateName(e.target.value);
        // this.props.uploadMessage(`${oldName} has changed their name to ${name}`);
      }
    }

    submitMessage = (e) => {
      if (e.key === 'Enter') {
        this.props.uploadMessage(e.target.value);
      }
    }

    render() {
      return (
        <footer className="chatbar">
           <input className="chatbar-username" placeholder="Your name here. Hit ENTER to update." onKeyDown={this.submitName}  />
           <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={this.submitMessage} />
        </footer>
      )
    }
  }
 export default ChatBar;