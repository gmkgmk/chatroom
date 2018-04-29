import io from "socket.io-client";
import global from './params';
const { url } = global

let socket = null;
const connectSocket = (Option = {}) => {
  if (!socket) {
    socket = io(url)
  }
  return socket;
}

export const connect = async Option => {
  await connectSocket(Option)
}

export const listen = async action => {
  socket.on('message', (data) => {
    action(data);
  });
}