import body from "../../main.js";
import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
const { getData } = opt;

export default function resultScreen(result) {
    let img = result === 'noob' ? 'https://media.tenor.com/wnDCvmiLwFEAAAAM/this-is-me-when-im-dumb-and-noob-on-minecraft.gif' : result === 'intermediario' ? 'https://i.pinimg.com/originals/c8/75/aa/c875aa0b0eafe89e6466346e37e34387.gif' : 'https://i.makeagif.com/media/8-15-2019/UQSmZD.gif';
    let h1 = () =>{
        if(result === 'noob'){
            return 'Você é noob'
        }else if(result === 'intermediario'){
            return 'Você é intermediario'
        }else{
            return 'Parabéns! Você é pro'
        }
    }
    let h2 = () =>{
        if(result === 'noob'){
            return `Que noob ${getData('usuario')}, vamos estudar mais para ser um pro.`
        }else if(result === 'intermediario'){
            return `Que intermediario ${getData('usuario')}, vamos estudar mais para ser um pro`
        }else{
            return `Que pro ${getData('usuario')}! Você já domina esse jogo! Parabéns!`
        }
    }
    
    body.innerHTML = `
        <main>
            <img src="${img}" alt="capa">
            <h5>Teste Gamer</h5>
            <h1>${h1()}</h1>
            <h2>${h2()}</h2>
        </main>
    `;

    on('click', '#start', rodar)

}