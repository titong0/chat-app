const crypto = require("crypto");
const config = require("../config");
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

server.listen(config.SV_PORT, () =>
  console.log("listening on port", config.SV_PORT)
);

io.on("connection", (socket) => {
  io.allSockets().then((i) => console.log(i));

  socket.on("message", (body) => {
    const messageData = {
      content: body.content,
      author: body.author,
      createdAt: body.createdAt,
    };
    io.emit("newMessage", messageData);
  });
});
