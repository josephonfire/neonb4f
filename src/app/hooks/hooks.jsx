import data from '../data/history.json'

const dataJSON = data;

function useTopArtists(data) {

    const acc = data.reduce((acc, item)=> { // criar uma variavel que vai percorrer o ficheiro JSON, recebe o seu valor + o item percorrido do ficheiro JSON

        const artistName = item.master_metadata_album_artist_name; // abrir uma constante com o nome do artista para uniformizar

        if (!acc[artistName]) { // se não encontrares o nome do artista atual
        acc[artistName] = { artistName, ms_total: 0 }; // criar uma chave que tem como valor 1 objeto com 2 propriedades: artistName, ms_totais - exemplo {Travis Scott: {artistName: Travis, ms_total: xxx}}
        }

        acc[artistName].ms_total += item.ms_played; // se já existir o artistName,  adicionar os ms da reprodução ao total criado

        return acc; // retornar o objeto preenchido com propriedades (com pares de chave-valor)
    }, {})

    const accumulator = Object.values(acc); // variável que tem como valor = [{artistName: Travis, ms_total: xxx}]

    const sorted = accumulator.sort((artistA, artistB) => artistB.ms_total - artistA.ms_total) // ordenar array de objetos por ordem decrescente dos ms_total.


    return sorted.slice(0-101); // retorno do array de objetos até ao top 100
}

