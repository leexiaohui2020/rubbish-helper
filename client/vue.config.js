const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    const { alias } = config.resolve;
    alias.set('style', resolve('src/style'));
  },
};
