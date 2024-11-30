import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
const { getDOM, getDOMValue, setData, getData } = opt;

class User {
    cadastro(username, password, confPassword){
        if(!username || !password || !confPassword){
            console.error("Todos os campos precisam ser preenchidos!");
            return;
        }

        if(password != confPassword) {
            console.error("As senhas são diferentes!");
            return;
        }

        setData("User", {
            username,
            password
        })
    }

    login(username, password) {
        const data = getData("User");
        if(username != data.username || password != data.password) {
            console.error("Usuário ou senha incorretos!");
            return;
        }
        
    }
}