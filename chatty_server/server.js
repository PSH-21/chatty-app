// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

const PORT = 3001;

const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === 1) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  // update userCount when new user connects
  console.log('Client connected');
  let data = {
    type: "userCountUpdate",
    count: wss.clients.size
  }
  data = JSON.stringify(data);
  wss.broadcast(data);


  ws.on('message', function incoming(data) {
    data = JSON.parse(data);
    var id = uuidv1();
    data['id'] = id;
    data = JSON.stringify(data);
    wss.broadcast(data);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    let data = {
      type: "userCountUpdate",
      count: wss.clients.size
    }
    data = JSON.stringify(data);
    wss.broadcast(data)
  });

});






