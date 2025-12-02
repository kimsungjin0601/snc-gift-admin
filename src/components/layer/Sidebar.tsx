import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({
        menu1: false,
        menu2: false,
    })

    const toggleMenu = (menu: string) => {
        setOpenMenu(prev => ({ ...prev, [menu]: !prev[menu] }));
    }

    return (
        <nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="side-menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element">
                            <a className="dropdown-toggle" href="#">
                                <span className="clear">
                                    <span className="block m-t-xs">
                                        <strong className="font-bold"><h3>상품권 관리시스템</h3></strong>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="logo-element">IN+</div>
                    </li>
                    <li className={openMenu.menu1 ? "active" : ""}>
                        <a onClick={() => toggleMenu("menu1")} style={{ cursor: "pointer" }}>
                            <i className="fa fa-table"></i> <span className="nav-label">Tables</span>
                            <span className="fa arrow"></span>
                        </a>

                        {openMenu.menu1 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/data/table">Data Tables</Link></li>
                            <li><Link to="/data/grid">Data Grid</Link></li>
                        </ul>
                        )}
                    </li>
                    <li className={openMenu.menu2 ? "active" : ""}>
                        <a onClick={() => toggleMenu("menu2")} style={{ cursor: "pointer" }}>
                            <i className="fa fa-table"></i> <span className="nav-label">Tables2</span>
                            <span className="fa arrow"></span>
                        </a>

                        {openMenu.menu2 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/tables/static">Static Tables</Link></li>
                            <li><Link to="/tables/data">Data Tables</Link></li>
                        </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
