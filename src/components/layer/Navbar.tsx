const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
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
                        <span className="m-r-sm text-muted welcome-message">관리자</span>
                    </li>
                    <li>
                        <a href="login.html">
                            <i className="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar