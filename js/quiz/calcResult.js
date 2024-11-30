export default function calcResult(quiz) {
    let noob = 0;
    let int = 0;
    let pro = 0;

    quiz.quest.forEach(questao => {
        questao.alt.forEach(alternativa =>{
            if(alternativa.marcado){
                switch(alternativa.resp){
                    case "noob":
                        noob ++;
                        break;
                    case "intermediario":
                        int ++;
                        break;
                    case "pro":
                        pro ++;
                        break;
                }
            }
        })
    });
    
    if(noob > int && noob > pro) {
        alert("Que Noob");
    } else if (int > noob && int > pro) {
        alert("Intermediário")
    } else if (pro > int && pro > noob) {
        alert("Que Pro")
    } else {
        alert("Intermediário")
    }
}