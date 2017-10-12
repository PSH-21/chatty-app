import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.connection;
    this.state = {

      currentUser: {name: "User1"},
      messages: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.connection = new WebSocket('ws://localhost:3001');
    this.connection.onopen = function (event) {
      console.log('Connected to server');
      // this.send("Here's some text that the server is urgently awaiting!");
    }
    this.connection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch(data.type) {
        case "incomingMessage":
        case "incomingNotification":
          this.setState({messages: this.state.messages.concat(data)})
          break;
        case "userCountUpdate":
          const userCount = this.setState.userCount;
          this.setState({userCount: data.count})
          break;
        default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + data.type);
    }


    }
  };




  uploadMessage = (message) => {
    const newMessage = {
      username: this.state.currentUser.name,
      content: message,
      type: "incomingMessage"
    }
    this.connection.send(JSON.stringify(newMessage));
  }

  updateName = (name) => {
    const oldName = this.state.currentUser.name
    this.setState({
      currentUser: {
        name
    }})
    const newMessage = {
      username: name,
      oldName: oldName,
      type: 'incomingNotification'
    }
    console.log(`${oldName} has changed their name to ${name}`);
    this.connection.send(JSON.stringify(newMessage));
  }



  render() {
    return (
       <div>
          <nav className="navbar">
            <a href='/' className="navbar-brand">Chatty</a>
            <span className="user-count"> {this.state.userCount} users online</span>
          </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar currentUser={this.state.currentUser} uploadMessage={this.uploadMessage} updateName={this.updateName}/>
      </div>
    );
  }
}
export default App;
