import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
const { getDOM } = opt;

import { capaScreen } from './js/screens/capa.js';

const site = {
    body: getDOM('body')
}

capaScreen(site.body)

export default site;