import '../../css/userInfoBar.css'
import { CgPlayButton } from "react-icons/cg";
/*componente para o perfil do utilizador*/
function UserInfoBar2(props) {

    return (
        <div className="infoBar1">
            <CgPlayButton className="ib-icon" />
            <div className="ib-text">
                 <p>Faixas Ouvidas: prop</p>
            </div>
        </div>
    )
}
export default UserInfoBar2;


//Tempo de Reprodução