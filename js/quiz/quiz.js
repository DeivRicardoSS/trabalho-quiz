const quiz = {
    nome: "Você é noob ou pro no minecraft?",
    desc: "Teste para saber se você é iniciante ou avançado no minecraft",
    quest: [
        {
            id: "quest0",
            tipo: "1",
            limite: 1,
            enun: "Na primeira noite, o que você faz?",
            alt: [
                {
                    quest: "você constroi uma casa",
                    resp: "intermediario",
                    marcado: false,
                    img: ''
                },
                {
                    quest: "Vai em busca de minérios sem se preocupar com as criaturas da noite",
                    resp: "pro",
                    marcado: false,
                    img: ''
                },
                {
                    quest: "Cava um buraco e se esconde até o amanhecer",
                    resp: "noob",
                    marcado: false,
                    img: ''
                }
            ]
        },
        {
            id: "quest1",
            tipo: "2",
            limite:2,
            enun: "Qual o minério mais útil?",
            alt: [
                {
                    quest: "Ferro",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Ouro",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Diamante",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest:"redstone",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                }
            ]
        },
        {
            id: "quest2",
            tipo: "1",
            limite:1,
            enun: "Você achou seus primeiros 5 diamantes. O que você fará com eles?",
            alt: [
                {
                    quest: "Elmo",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Picareta e Mesa de Encantamentos",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "toca disco",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Armadura completa",
                    resp: "noob",
                    marcado: false,
                    img:''
                }
            ]
        },
        {
            id: "quest3",
            tipo: "2",
            limite:2,
            enun: "Melhor farm de xp?",
            alt: [
                {
                    quest: "Endarman",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Farm de mob spawner",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Mobtrap clássica ",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Farm de porco",
                    resp: "noob",
                    marcado: false,
                    img:''
                }
            ]
        },
        {
            id: "quest4",
            tipo: "2",
            limite:4,
            enun: "Melhor comida do jogo?",
            alt: [
                {
                    quest: "Carne podre",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Galinha assada",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest: "bife",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Bacon",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Cenoura",
                    resp:"noob",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Cenoura dourada",
                    resp:"pro",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Torta de albobora",
                    resp:"intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest: "beterraba",
                    resp: "noob",
                    marcado: false,
                    img:''
                }
            ]
        },
        {
            id: "quest5",
            tipo: "2",
            limite:2,
            enun: "Farms essenciais para o começo da gameplay",
            alt: [
                {
                    quest: "Farm de Pedra",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Farm de pólvora",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Farm de Areia",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Farm de Madeira",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Farm de xp",
                    resp:"pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Farm de Comida",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                }
                
            ]
        },
        {
            id: "quest6",
            tipo: "2",
            limite:3,
            enun: "Quais os intens mais últeis?",
            alt: [
                {
                    quest: "Maçã dourada",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Totem da imortalidade",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Balde de Leite",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Poção de dano",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Couro",
                    resp:"noob",
                    marcado: false,
                    img:''
                },
            ]
                
        },
        {
            id: "quest7",
            tipo: "1",
            limite:1,
            enun: "O que dá mais medo?",
            alt: [
                {
                    quest: "Herobrine",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Wander",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Endermen",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Bebê zumbi com armadura e espada",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest:"fantasmas",
                    resp:"noob",
                    marcado: false,
                    img:''
                }
            ]
        },
        
        {
            id: "quest8",
            tipo: "2",
            limite:2,
            enun: "Quais mobs mais últeis?",
            alt: [
                {
                    quest: "Galinha",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "piglin",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Endermen",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Aldeão",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
            ]
        },
        {
            id: "quest9",
            tipo: "1",
            limite:1,
            enun: "Qual a melhor parte do jogo?",
            alt: [
                {
                    quest: "Sistema de economia",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Sequestro de aldeão",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Matar o dragão",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Lutar no nether",
                    resp: "intermediario",
                    marcado: false,
                    img:''

                }  
            ]
        },
        {
            
        
        id: "quest10",
            tipo: "1",
            limite:1,
            enun: "Quem é melhor?",
            alt: [
                {
                    quest: "Mozzart",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Chopin",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Mundo Bita",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest:"C418",
                    resp: "pro",
                    marcado: false,
                    img:''
                }  
            ]
        },
        {
            id: "quest11",
            tipo: "1",
            limite:1,
            enun: "Quantos minerios faz uma armadura completa?",
            alt: [
                {
                    quest: "20",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest: "32",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "24",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest:"4",
                    resp: "noob",
                    marcado: false,
                    img:''
                }  
            ]
        },
        {
            id: "quest12",
            tipo: "1",
            limite:1,
            enun: "Qual bloco mais resistente coletável?",
            alt: [
                {
                    quest: "Bloco de diamante",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Obisidiana",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Tijolos de pedra",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest:"Bloco de quartzo",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                }  
            ]    
        },
        {
            id: "quest13",
            tipo: "1",
            limite:1,
            enun: "Você usa o comando de Manter Iventário?",
            alt: [
                {
                    quest: "Sim",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Não",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Nunca",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                
            ]    
        },
        {
            id: "quest14",
            tipo: "1",
            limite:1,
            enun: "Qual o nome do Zumbi do deserto?",
            alt: [
                {
                    quest: "Múmia",
                    resp: "intermediario",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Criatura",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Enormossauro",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                
            ]    
        },
        {
            id: "quest15",
            tipo: "1",
            limite:1,
            enun: "Qual o nome do esqueleto da neve?",
            alt: [
                {
                    quest: "Esqueleto errante",
                    resp: "pro",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Elza",
                    resp: "noob",
                    marcado: false,
                    img:''
                },
                {
                    quest: "Friagem",
                    resp: "noob",
                    marcado: false,
                    img:''
                }
            ]
        }
            
    ]
}
 

export default quiz;