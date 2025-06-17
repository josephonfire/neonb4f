import '../../css/userInfoBar.css'
import { CgPlayButton } from "react-icons/cg";
/*componente para o perfil do utilizador*/
function UserInfoBar3(props) {

    return (
        <div className="infoBar1">
            <CgPlayButton className="ib-icon" />
            <div className="ib-text">
                 <p>Tempo de Reprodução: prop</p>
            </div>
        </div>
    )
}
export default UserInfoBar3;
