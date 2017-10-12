import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.connection;
    this.state = {
      online: false,
      userCount: 0,
      currentUser: {name: "User1"},
      messages: [],
    };
  }

  componentDidMount() {
    // console.log("componentDidMount <App />");
    this.connection = new WebSocket(`ws://${location.hostname}:3001`);

    this.connection.onopen = (event) => {
      this.setState({ online: true });
      console.log('Connected to server');
      // this.send("Here's some text that the server is urgently awaiting!");
    }

    this.connection.onclose = (event) => {
      this.setState({ offline: false });
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
        // throw new Error("Unknown event type " + data.type);
        console.error(`Unknown event type ${data.type}`);
      }
    }
  }

  componentWillUnmount() {
    if(this.connection) {
      this.connection.close();
    }
  }

  send(type, payload) {
    if(!this.connection) { return; }

    const data = JSON.stringify({
      type,
      ...payload // google MDN spread operator
    });

    this.connection.send(data);
  }

  sendMessage(username, content) {
    this.send('incomingMessage', { username, content });
  }

  sendNameUpdate(oldname, newname) {
    this.send('nameChange', { username: newname, oldName: oldname });
  }


  uploadMessage = (message) => {
    this.sendMessage(this.state.currentUser.name, message);
  }

  updateName = (name) => {
    const oldName = this.state.currentUser.name
    this.setState({
      currentUser: {
        name
    }})

    console.log(`${oldName} has changed their name to ${name}`);
    this.sendNameUpdate(oldName, name);
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <a href='/' className="navbar-brand">Chatty</a>
          <span className="user-count"> {this.state.userCount} users online</span>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar online={this.state.online} username={this.state.currentUser.name} uploadMessage={this.uploadMessage} updateName={this.updateName}/>
      </div>
    );
  }
}