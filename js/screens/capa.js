import opt from 'http://deivyson.me/optmization-js/src/index.js';
const { on } = opt;

import { rodar } from './questoes.js';

export function capaScreen(body) {
    body.innerHTML = `
        <main>
            <img src="./img/image.png" alt="capa">
            <h5>Teste Gamer</h5>
            <h1>Você é noob ou pro no minecraft?</h1>
            <button id="start" class="btn">
                Iniciar Quiz
            </button>
        </main>
    `;

    on('click', '#start', rodar)

}