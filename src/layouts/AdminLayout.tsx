import { useEffect, useState } from "react";
import Sidebar from "../components/layer/Sidebar";
import Navbar from "../components/layer/Navbar";
import Footer from "../components/layer/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const sideBarToggleClass = "mini-navbar";

    console.log("AdminLayout rendered");

    useEffect(() => {
        // 초기 사이드바 상태 설정
        if (sidebarOpen) {
            document.body.classList.remove(sideBarToggleClass);
        } else {
            document.body.classList.add(sideBarToggleClass);
        }
    }, [sidebarOpen]);

    const toggleSidebar = () => {        
        setSidebarOpen(prev => !prev);
    };

    return (
        <div id="wrapper" style={{ width: "100%", maxWidth: "100%" }}>
            <Sidebar />

            <div id="page-wrapper" className="gray-bg">
                <Navbar onToggleSidebar={toggleSidebar} />
                <Outlet />
                <Footer />
            </div>
        </div>
  );
}

export default AdminLayout
