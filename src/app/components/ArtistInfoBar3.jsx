import '../../css/artistInfoBar.css'
import { CgPlayButton } from "react-icons/cg";
import data from '../data/history.json'
/*componente para o perfil do artista*/
function ArtistInfoBar3(props) {

    return (
        <div className="infoBar1">
            <CgPlayButton className="ib-icon" />
            <div className="ib-text">
                 <p>Tempo de Reprodução: {props.artistData} minutos</p>
            </div>
        </div>
    )
}
export default ArtistInfoBar3;

//Faixas ouvidas:
//Tempo de Reprodução