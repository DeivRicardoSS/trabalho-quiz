import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
const { getDOM, setData } = opt;

import { capaScreen } from './js/screens/capa.js';

const body = getDOM('body');

setData('quest', 0);

capaScreen(body);

export default body;