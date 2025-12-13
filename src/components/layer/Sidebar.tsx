import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false,
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
                        <Link to={"/partner"} >
                            <i className="fa fa-table"></i> <span className="nav-label">회원</span>
                            {/* <span className="fa arrow"></span> */}
                        </Link>

                        {/* {openMenu.menu1 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/data/table">Data Tables</Link></li>
                            <li><Link to="/data/grid">Data Grid</Link></li>
                        </ul>
                        )} */}
                    </li>
                    <li className={openMenu.menu2 ? "active" : ""}>
                        <Link to={"/blacklist"} >
                            <i className="fa fa-diamond"></i> <span className="nav-label">블랙리스트</span>
                            {/* <span className="fa arrow"></span> */}
                        </Link>

                        {/* {openMenu.menu2 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/tables/static">Static Tables</Link></li>
                            <li><Link to="/tables/data">Data Tables</Link></li>
                        </ul>
                        )} */}
                    </li>
                    <li className={openMenu.menu3 ? "active" : ""}>
                        <Link to={"#"} onClick={() => toggleMenu("menu3")} style={{ cursor: "pointer" }}>
                            <i className="fa fa-magic"></i> <span className="nav-label">가상핀</span>
                            <span className="fa arrow"></span>
                        </Link>

                        {openMenu.menu3 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/gift-pin">가상핀 거래조회</Link></li>
                            <li><Link to="/gift-pin-high">고액 가상핀 거래조회</Link></li>
                        </ul>
                        )}
                    </li>
                    <li className={openMenu.menu4 ? "active" : ""}>
                        <Link to={"#"} onClick={() => toggleMenu("menu4")} style={{ cursor: "pointer" }}>
                            <i className="fa fa-star"></i> <span className="nav-label">포인트</span>
                            <span className="fa arrow"></span>
                        </Link>

                        {openMenu.menu4 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/point">포인트 거래조회</Link></li>
                            <li><Link to="/point-agent">당일 대리점 일별 집계</Link></li>
                            <li><Link to="/point-day">당일 포인트 일별 집계</Link></li>
                        </ul>
                        )}
                    </li>
                    <li className={openMenu.menu5 ? "active" : ""}>
                        <Link to={"#"} onClick={() => toggleMenu("menu5")} style={{ cursor: "pointer" }}>
                            <i className="fa fa-laptop"></i> <span className="nav-label">포인트 (전일)</span>
                            <span className="fa arrow"></span>
                        </Link>

                        {openMenu.menu5 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/point-agent/before">전일 대리점 일별 집계</Link></li>
                            <li><Link to="/point-day/before">전일 포인트 일별 집계</Link></li>                            
                        </ul>
                        )}
                    </li>
                    <li className={openMenu.menu6 ? "active" : ""}>
                        <Link to={"/order"}>
                            <i className="fa fa-shopping-cart"></i> <span className="nav-label">주문 조회</span>
                            {/* <span className="fa arrow"></span> */}
                        </Link>

                        {/* {openMenu.menu6 && (
                        <ul className="nav nav-second-level">
                            <li><Link to="/tables/static">Static Tables</Link></li>
                            <li><Link to="/tables/data">Data Tables</Link></li>
                        </ul>
                        )} */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
