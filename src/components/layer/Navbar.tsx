import signService from "@/apis/service/signService";
// import { logoutState } from "@/states/atoms/loginState";
import { userState } from "@/states/atoms/userState";
import TokenUtil from "@/utils/TokenUtil";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
    const navigate = useNavigate()

    const [user, setUser] = useRecoilState(userState);
    // const setLogout = useSetRecoilState(logoutState);

    const handleLogout = () => {
        logoutUser();
    }

    const logoutUser = async () => {
        try {
            await signService.signOut({});
            TokenUtil.removeAccessToken();
            // setLogout(true);
            setUser(null);
            navigate('/sign-in');

        } catch (error) {
            console.error("로그아웃 에러 : ", error);
        }
    }

    return (
        <div className="row border-bottom" style={{height:60}}>
            <nav className="navbar navbar-static-top" role="navigation">
                <div className="navbar-header" style={{paddingLeft:20, paddingTop:10}}>
                    <a className="navbar-minimalize btn btn-primary" 
                        onClick={(e) => {
                        e.preventDefault();
                        onToggleSidebar();
                        }}
                        style={{ cursor: "pointer" }}
                    >
                    <i className="fa fa-bars"></i>
                    </a>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <span className="m-r-sm text-muted welcome-message">{user.userName}</span>
                    </li>
                    <li>
                        <Link  to={"#"} onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i> Log out
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar