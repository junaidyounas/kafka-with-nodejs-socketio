const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
          res.sendFile(__dirname + '/public/index.html');
});

// this is node js project where you are listing the port by using localhost
io.on('connection', (socket) => {
          console.log('A user connected');
          socket.on('disconnect', () => {
                    console.log('A user disconnected');
          });
});

server.listen(3000, () => {
          console.log('listening on *:3000');
});

exports.io = io;
