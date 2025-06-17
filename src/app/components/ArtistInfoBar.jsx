import '../../css/artistInfoBar.css'
import { CgPlayButton } from "react-icons/cg";
/*componente para o perfil do artista*/
function ArtistInfoBar(props) {

    return (
        <div className="infoBar1">
            <CgPlayButton className="ib-icon" />
            <div className="ib-text">
                 <p>Reproduções: prop</p>
            </div>
        </div>
    )
}
export default ArtistInfoBar;

//Faixas ouvidas:
//Tempo de Reprodução