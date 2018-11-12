const data = require('./data');
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
  

app.get('/', function (req, res) {
    const callback = req.query.callback;
    res.end(`${callback}(${JSON.stringify(data.randomName())})`);
  });
 
app.ws('/', function(ws, req) {
    let handler = null;
  ws.on('message', function(msg) {
    handler = setInterval(() => {
        console.log("Sending");
        ws.send(JSON.stringify(data.randomWords()));
    }, 300);
  });
  ws.on('close', () => {
      console.log("Closed connection");
      clearInterval(handler);
  })
});
 
if (module === require.main) {
    const server = app.listen(process.env.PORT || 80, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}

module.exports = app;