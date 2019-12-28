import Vue from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash';

const files = require.context('./modules', false, /\.js$/);
const modules = files.keys().reduce((map, key) => {
  const name = lodash.camelCase(key.match(/\.\/(\S*)\.js/)[1]);
  const part = files(key).default;
  part.namespaced = true;
  // eslint-disable-next-line no-param-reassign
  map[name] = part;
  return map;
}, {});

Vue.use(Vuex);
export default new Vuex.Store({
  modules,
});
