import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
const { getData, setData, getDOM, on } = opt;

import calcResult from '../quiz/calcResult.js'
import quiz from "../quiz/quiz.js";
import site from '../../main.js';



export function rodar() {
    if(!getData('quest')) {
        setData('quest', 0);
    }

    let quest = Number(getData('quest'));
    site.body.innerHTML = `
        <div id="enum">
            <h2>${quiz.quest[quest].enun}</h2>
        </div>
        <div id="quests">

        </div>

        <button class="btn" id="prox" style="width : 40rem">
            Proxima Questão
        </button>
    `;
    quiz.quest[quest].alt.forEach((altern, i, arr) =>{
        getDOM("#quests").innerHTML += `
            <div title="${altern.quest}_${i}">
                <img src="${altern.img}" alt="questimg"/>
                <h3>${altern.quest}</h3>
            </div>
        `;

    });

    quiz.quest[quest].alt.forEach((altern, i, arr) =>{
        getDOM(`#quests div[title="${altern.quest}_${i}"]`).addEventListener('click', ()=>{
            console.log(altern.marcado)
            if(altern.marcado){
                arr[i].marcado = false;
                getDOM(`#quests div[title="${altern.quest}_${i}"]`).classList.remove('active')
            }else {
                arr[i].marcado = true;
                getDOM(`#quests div[title="${altern.quest}_${i}"]`).classList.add('active')
            }
        });

    });

    on('click', '#prox', ()=>{
        quest ++;
        setData('quest', quest);
        if(quest < quiz.quest.length){
            rodar()
        } else if(quest >= quiz.quest.length ) {
            calcResult(quiz);
        }
    });
    
}