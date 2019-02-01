const cache = require('memory-cache');

const putCache = (key, value) => {
  cache.put(key, value, '3000');
};

const getCache = (key) => {
  cache.get(key);
};

module.exports = {
  putCache,
  getCache,
};
