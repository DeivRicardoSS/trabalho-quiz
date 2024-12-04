import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
const { getData, setData, getDOM, on, getDOMAll } = opt;

import calcResult from '../quiz/calcResult.js'
import quiz from "../quiz/quiz.js";
import body from '../../main.js';
import { porcentagem } from '../calc.js';   



export function rodar() {
    if(!getData('quest')) {
        setData('quest', 0);
    }

    let quest = Number(getData('quest'));
    body.innerHTML = `
        <div class="loading">
            <div style="width:${porcentagem(quiz.quest.length, quest)}%"></div>
        </div>
        <div id="enum">
            <h2>${quiz.quest[quest].enun}</h2>
            <h3><spam>0</spam>/${quiz.quest[quest].limite}</h3>
        </div>
        <div id="quests">

        </div>

        <button class="btn" id="prox" style="width : 40rem; opacity: 0.5">
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
            if(altern.marcado){
                arr[i].marcado = false;
                getDOM(`#quests div[title="${altern.quest}_${i}"]`).classList.remove('active')
                getDOM('#enum h3 spam').innerHTML = Number(getDOM('#enum h3 spam').innerHTML) - 1;
                getDOM('#prox').style.opacity = '0.5';
                getDOMAll('#quests div').forEach((item)=>{
                    if(!item.classList.contains('active')){
                        item.style.opacity = '1';
                    }
                });
            }else if(!altern.marcado && Number(getDOM('#enum h3 spam').innerHTML) < quiz.quest[quest].limite){
                arr[i].marcado = true;
                getDOM(`#quests div[title="${altern.quest}_${i}"]`).classList.add('active')
                getDOM('#enum h3 spam').innerHTML = Number(getDOM('#enum h3 spam').innerHTML) + 1;
            }

            if(Number(getDOM('#enum h3 spam').innerHTML) == quiz.quest[quest].limite){
                //deixar itens que não tem a classe active com opacidade reduzida
                getDOMAll('#quests div').forEach((item)=>{
                    if(!item.classList.contains('active')){
                        item.style.opacity = '0.5';
                    }
                });

                getDOM('#prox').style.opacity = '1';
                
            }
        });

    });

    on('click', '#prox', ()=>{
        if(Number(getDOM('#enum h3 spam').innerHTML) == quiz.quest[quest].limite){
            quest ++;
            setData('quest', quest);
            if(quest < quiz.quest.length){
                rodar();
            } else if(quest >= quiz.quest.length ) {
                calcResult(quiz);
            }
        }
    });
    
}