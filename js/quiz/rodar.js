import quiz from './quiz.js';

quiz.quest.forEach(questao => {
    exibir(
        questao.enun,
        questao.alt,
    );
});