import data from '../data/history.json'

export function filterDate4Weeks (data) {

    let mostRecent = new Date("2020-06-15T00:27:30Z"); //  variavel para guardar data (com data inicial aleatória)

        data.forEach((item) => { // iteração para cada item do JSON
            const current = new Date(item.ts); // variável do valor da data do item atual ao iterar

            if (current > mostRecent) { // se o item atual for mais recente que a variável
            mostRecent = current; // atribui novo valor à variável, até encontrar o mais recente
            }

        });

        const daysDifference = days => { // funcao que recebe valor do "days" atrás
            const daysInMs = days * 24 * 3600 * 1000; //numero de dias * ms

            let pastDate = new Date(mostRecent - daysInMs); // diferença entre a data mais recente e os ms Totais

            return pastDate; // retorna a data ms em JSON
        }

        const fourWeeks = daysDifference(28); // data de 28 dias antes da data mais recente


    const filteredJSON = data.reduce((acc, item)=> { // função de reduzir o array JSON para:
 

        if (new Date (item.ts) > fourWeeks && new Date (item.ts) < mostRecent) { // se está entre data recente e 4 semanas atrás dessa data
            acc.push(item) // envia para o acumulador da função
        }

    return acc; // retorna o acumulador

    }, [])

    return filteredJSON; // retorna um array de objetos filtrado por semanas

}


// ----------------------------------------------------------------- //

export function filterDate6Months (data) {

    let mostRecent = new Date("2020-06-15T00:27:30Z"); //  variavel para guardar data (com data inicial aleatória)

        data.forEach((item) => { // iteração para cada item do JSON
            const current = new Date(item.ts); // variável do valor da data do item atual ao iterar

            if (current > mostRecent) { // se o item atual for mais recente que a variável
            mostRecent = current; // atribui novo valor à variável, até encontrar o mais recente
            }

        });

        const daysDifference = days => { // funcao que recebe valor do "days" atrás
            const daysInMs = days * 24 * 3600 * 1000; //numero de dias * ms

            let pastDate = new Date(mostRecent - daysInMs); // diferença entre a data mais recente e os ms Totais

            return pastDate; // retorna a data ms em JSON
        }

        const sixMonths = daysDifference(182); // data de 6 meses antes da data mais recente


    const filteredJSON = data.reduce((acc, item)=> { // função de reduzir o array JSON para:
 

        if (new Date (item.ts) > sixMonths && new Date (item.ts) < mostRecent) { // se está entre data recente e 6 meses atrás dessa data
            acc.push(item) // envia para o acumulador da função
        }

    return acc; // retorna o acumulador

    }, [])

    return filteredJSON; // retorna um array de objetos filtrado por semanas

}


// ----------------------------------------------------------- //


export function filter1Year (data) {

    let mostRecent = new Date("2020-06-15T00:27:30Z"); //  variavel para guardar data (com data inicial aleatória)

        data.forEach((item) => { // iteração para cada item do JSON
            const current = new Date(item.ts); // variável do valor da data do item atual ao iterar

            if (current > mostRecent) { // se o item atual for mais recente que a variável
            mostRecent = current; // atribui novo valor à variável, até encontrar o mais recente
            }

        });

        const daysDifference = days => { // funcao que recebe valor do "days" atrás
            const daysInMs = days * 24 * 3600 * 1000; //numero de dias * ms

            let pastDate = new Date(mostRecent - daysInMs); // diferença entre a data mais recente e os ms Totais

            return pastDate; // retorna a data ms em JSON
        }

        const oneYear = daysDifference(365); // data de 1 ano antes da data mais recente


    const filteredJSON = data.reduce((acc, item)=> { // função de reduzir o array JSON para:
 

        if (new Date (item.ts) > oneYear && new Date (item.ts) < mostRecent) { // se está entre data recente e 1 ano atrás dessa data
            acc.push(item) // envia para o acumulador da função
        }

    return acc; // retorna o acumulador

    }, [])

    return filteredJSON; // retorna um array de objetos filtrado por semanas

}