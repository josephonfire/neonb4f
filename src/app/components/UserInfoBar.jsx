import '../../css/userInfoBar.css'
/*artist card component*/
function UserInfoBar(props) {

    return (
        <div className="infoBar1">
            <div className="card-text">
                <p>Reproduções:{props.position}</p>
            </div>
        </div>
    )
}
export default UserInfoBar;