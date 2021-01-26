const express = require('express');
const scoketio = require('socket.io');

const http = require('http');
const { Console } = require('console');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);


server.listen(PORT, () => Console.log(`Server started on port ${PORT}`));