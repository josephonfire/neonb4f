import data from '../data/history.json'
import filterDate from './filterDate'

const dataJSON = data;

export function useTopArtists(data) {

    const acc = data.reduce((acc, item)=> { // criar uma variavel que vai percorrer o ficheiro JSON, recebe o seu valor + o item percorrido do ficheiro JSON


        const artistName = item.master_metadata_album_artist_name; // abrir uma constante com o nome do artista para uniformizar

        if (!artistName) {
            return acc; // ignora se for null, undefined ou string vazia
        }


        if (!acc[artistName]) { // se não encontrares o nome do artista atual
        acc[artistName] = { artistName, ms_total: 0 }; // criar uma chave que tem como valor 1 objeto com 2 propriedades: artistName, ms_totais - exemplo {Travis Scott: {artistName: Travis, ms_total: xxx}}
        }

        acc[artistName].ms_total += item.ms_played; // se já existir o artistName,  adicionar os ms da reprodução ao total criado

        return acc; // retornar o objeto preenchido com propriedades (com pares de chave-valor)
    }, {})

    const accumulator = Object.values(acc); // variável que tem como valor = [{artistName: Travis, ms_total: xxx}]

    const sorted = [...accumulator.sort((artistB, artistA) => artistA.ms_total - artistB.ms_total)] // ordenar array de objetos por ordem decrescente dos ms_total.


    return sorted.slice(0,100); // retorno do array de objetos até ao top 100 artistas


    // -------------------------------------------------------- //
}
    export function useTopSongs(data) {

        const acc = data.reduce((acc, item)=> { // criar uma variavel que vai percorrer o ficheiro JSON, recebe o seu valor + o item percorrido do ficheiro JSON

            const trackName = item.master_metadata_track_name; // abrir uma constante com o nome da música para uniformizar
            const artistName = item.master_metadata_album_artist_name;

            if (!artistName) {
            return acc; // ignora se for null, undefined ou string vazia
        }

            if (!acc[trackName]) { // se não encontrares a música atual
            acc[trackName] = { trackName, artistName, ms_total: 0 }; // criar uma chave que tem como valor 1 objeto com 3 propriedades: trackName, artistName, ms_totais - exemplo {Travis Scott: {artistName: Travis, ms_total: xxx}}
            }

            acc[trackName].ms_total += item.ms_played; // se já existir a música selecionada,  adicionar os ms da reprodução ao total criado

            return acc; // retornar o objeto preenchido com propriedades (com pares de chave-valor)
        }, {})

        const accumulator = Object.values(acc); // variável que tem como valor = [{trackName: Antidote, artistName: Travis, ms_total: xxx}]

        const sorted = [...accumulator.sort((trackB, trackA) => trackA.ms_total - trackB.ms_total)] // ordenar array de objetos por ordem decrescente dos ms_total.


        return sorted.slice(0,100); // retorno do array de objetos até ao top 100 musicas
    }

    // ------------------------------------------------------- //

    export function useTopAlbums(data) {

        const acc = data.reduce((acc, item)=> { // criar uma variavel que vai percorrer o ficheiro JSON, recebe o seu valor + o item percorrido do ficheiro JSON

            const albumName = item.master_metadata_album_album_name; // abrir uma constante com o nome do álbum para uniformizar
            const artistName = item.master_metadata_album_artist_name;

            if (!artistName) {
            return acc; // ignora se for null, undefined ou string vazia
        }

            if (!acc[albumName]) { // se não encontrares o álbum atual
            acc[albumName] = { albumName, artistName, ms_total: 0 }; // criar uma chave que tem como valor 1 objeto com 3 propriedades: albumName, artistName, ms_totais - exemplo {Travis Scott: {artistName: Travis, ms_total: xxx}}
            }

            acc[albumName].ms_total += item.ms_played; // se já existir o álbum selecionado,  adicionar os ms da reprodução ao total criado

            return acc; // retornar o objeto preenchido com propriedades (com pares de chave-valor)
        }, {})

        const accumulator = Object.values(acc); // variável que tem como valor = [{albumName: Rodeo, artistName: Travis, ms_total: xxx}]

        const sorted = [...accumulator.sort((albumB, albumA) => albumA.ms_total - albumB.ms_total)] // ordenar array de objetos por ordem decrescente dos ms_total.


        return sorted.slice(0,100); // retorno do array de objetos até ao top 100 musicas
    }

    // ------------------------------------------------------------- // 

    export function useTopArtists2(data) {

    const acc = data.reduce((acc, item)=> { // criar uma variavel que vai percorrer o ficheiro JSON, recebe o seu valor + o item percorrido do ficheiro JSON

        const artistName = item.master_metadata_album_artist_name; // abrir uma constante com o nome do artista para uniformizar

        if (!artistName) {
            return acc; // ignora se for null, undefined ou string vazia
        }

        if (!acc[artistName]) { // se não encontrares o nome do artista atual
        acc[artistName] = { artistName, n: 1 }; // criar uma chave que tem como valor 1 objeto com 2 propriedades: artistName, ms_totais - exemplo {Travis Scott: {artistName: Travis, ms_total: xxx}}
        }

        acc[artistName].n += 1; // se já existir o artistName,  adicionar +1 ao n

        return acc; // retornar o objeto preenchido com propriedades (com pares de chave-valor)
    }, {})

    const accumulator = Object.values(acc); // variável que tem como valor = [{artistName: Travis, n: xxx}]

    const sorted = [...accumulator.sort((artistB, artistA) => artistA.n - artistB.n)] // ordenar array de objetos por ordem decrescente dos n.


    return sorted.slice(0,100); // retorno do array de objetos até ao top 100 artistas
}

// ---------------------------------------------------------------- //

