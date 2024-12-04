import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
const { getDOM, setData } = opt;

import { capaScreen } from './js/screens/capa.js';

const body = getDOM('body');

setData('quest', 0);

const audio = new Audio('./audio/audioskibidi.mp3');
audio.loop = true;

document.addEventListener('click', () => {
    audio.play();
})


capaScreen(body);

export default body;