const ws = require('ws');
const WebSocket = require('ws');

const messages = [
    {type: "ellipse", x: 10, y: 20, sizeX: 50, sizeY: 50}
]

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if(message === "born"){
        console.log("A new process was born")
        ws.send(JSON.stringify(messages[0]))
    }
  });


});

function born(){
    console.log("Born")
}