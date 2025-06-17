import '../../css/artistInfoBar.css'
import { CgPlayButton } from "react-icons/cg";
/*componente para o perfil do artista*/
function ArtistInfoBar2(props) {

    return (
        <div className="infoBar1">
            <CgPlayButton className="ib-icon" />
            <div className="ib-text">
                 <p>Faixas Ouvidas: prop</p>
            </div>
        </div>
    )
}
export default ArtistInfoBar2;


//Tempo de Reprodução