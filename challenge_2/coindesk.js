const request = require('request');

const getBit = (start, end, callback) => {
  const options = {
    url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`,
    headers: {
      'User-Agent': 'request',
    },
  };
  request(options, callback);
};

module.exports = {
  getBit,
};
