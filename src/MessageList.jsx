import React, {Component} from 'react';
import Message from './Message.jsx';

 class MessageList extends Component {
   render() {
     return (
      <div classname="message-list">
        <Message/>
      </div>
     )
   }
 }

 export default MessageList;