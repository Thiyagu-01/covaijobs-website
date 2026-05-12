import { useState } from "react";
import Sidebar from "./SideBar.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import "./dashboardlayout.css";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`dashboard-layout ${collapsed ? "collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} />

      <div className="dashboard-main">
        <Header onToggle={() => setCollapsed(!collapsed)} />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
