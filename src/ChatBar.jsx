import React, {Component} from 'react';

export default class ChatBar extends Component {
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
         <input className="chatbar-username" defaultValue={this.props.username} placeholder="Your name here. Hit ENTER to update." onKeyDown={this.submitName} disabled={!this.props.online}  />
         <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={this.submitMessage} disabled={!this.props.online} />
      </footer>
    )
  }
}
