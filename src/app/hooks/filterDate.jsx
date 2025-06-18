import data from '../data/history.json'

export function filterDate4Weeks (data) {

    let mostRecent = new Date("2020-06-15T00:27:30Z"); //  variavel para guardar data (com data inicial aleatória)

    data.forEach((item) => { // iteração para cada item do JSON
        const current = new Date(item.ts); // variável do valor da data do item atual ao iterar

        if (current > mostRecent) { // se o item atual for mais recente que a variável
        mostRecent = current; // atribui novo valor à variável, até encontrar o mais recente
        }

    });

    

    const filteredJSON = data.reduce((filteredJSON, item)=> {

    if (new Date (item.ts))
    }, {})

}

    function getDays (data) {
        const month = data.getMonth()
        const day = data.getDate()

        if (day <= // dia pretendido && month se for preciso) return "o que voce queria"

    }<



