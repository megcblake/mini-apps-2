const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const coindesk = require('./coindesk.js');
const cache = require('./cache.js');

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(bodyParser());

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/coins', (req, res) => {
  const { start } = req.query;
  const { end } = req.query;
  coindesk.getBit(start, end, (error, response) => {
    if (error) {
      throw error;
    } else {
      const bitResp = response.body;
      const bitData = JSON.parse(bitResp);
      const data = bitData.bpi;
      res.send(data);
    }
  });
});

app.get('/cache', (req, res) => {
  const { start } = req.query;
  const { end } = req.query;
  const cachedBody = cache.getCache([start - end]);
  if (cachedBody) {
    res.send(cachedBody);
  } else {
    res.status(404).end();
  }
});

app.listen(port, () => console.log('listening on port 3000'));
