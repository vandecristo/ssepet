const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3001'
}

app.get('/events', cors(corsOptions), (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  //send SSE
  setInterval(() => {
    const data = { 
      data: { 
        "at": "2023-08-17T12:00:06.878921",
        "payload": {
          "eventType": "ApplicationStatusEvent",
          "mdmId": "123",
          "requestId": "44dc9ed5-8ac5-49c0-9e4e-86f146baf3be",
          "applicationId": "ea2d8c2f-4662-49a1-a523-65be39dac898",
          "status":"PROCESSING"
        }
      }
    };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 5000);
});

app.listen(3000, () => console.log('server is listenig on port 3000'));