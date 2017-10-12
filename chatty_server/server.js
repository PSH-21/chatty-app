// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

const PORT = process.env.PORT || 3001;

const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', function() {
    console.log(`Listening on ${this.address().port}`);
  });

const wss = new SocketServer({ server });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  const payload = JSON.stringify(data);
  wss.clients.forEach(function each(client) {
    if (client.readyState === 1) {
      client.send(payload);
    }
  });
};

const updateOnlineCount = () => {
  wss.broadcast({
    type: "userCountUpdate",
    count: wss.clients.size
  });
}

wss.on('connection', client => {
  // update userCount when new user connects
  console.log('Client connected');
  updateOnlineCount();


  client.on('message', data => {
    let message = JSON.parse(data);

    switch(message.type) {
      case 'nameChange':
        message = {
          content: `User ${message.oldName} changed their name to ${message.username}`,
          type: 'incomingNotification'
        };
        break;
    }
    message.id = uuidv1();
    wss.broadcast(message);
  });

  client.on('close', () => {
    console.log('Client disconnected');
    updateOnlineCount();
  });

});






