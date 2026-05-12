

import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdWork,
  MdAccountCircle,
  MdListAlt,
  MdUploadFile,
  MdFileDownload,
  MdHowToReg,
  MdPublic,
  MdCampaign,
  MdLogout,
} from "react-icons/md";

import "./sidebar.module.css";

export default function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-logo">
        {collapsed ? "CJ" : "Covaijobs"}
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/Step6-education" className="menu-item">
          <MdDashboard className="menu-icon" />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink to="/" className="menu-item">
          <MdWork className="menu-icon" />
          {!collapsed && "View CovaiJobs"}
        </NavLink>

        <NavLink to="/account" className="menu-item">
          <MdAccountCircle className="menu-icon" />
          {!collapsed && "Account"}
        </NavLink>

        <NavLink to="/profile-list" className="menu-item">
          <MdListAlt className="menu-icon" />
          {!collapsed && "Profile List"}
        </NavLink>

        <NavLink to="/Step6-education" className="menu-item">
          <MdUploadFile className="menu-icon" />
          {!collapsed && "Upload Profile"}
        </NavLink>

        <NavLink to="/profile-import" className="menu-item">
          <MdFileDownload className="menu-icon" />
          {!collapsed && "Profile Import"}
        </NavLink>

        <NavLink to="/applied-jobs" className="menu-item">
          <MdHowToReg className="menu-icon" />
          {!collapsed && "My Applied Jobs"}
        </NavLink>

        <NavLink to="/remote-jobs" className="menu-item">
          <MdPublic className="menu-icon" />
          {!collapsed && "Remote Jobs"}
        </NavLink>

        <NavLink to="/announcements" className="menu-item">
          <MdCampaign className="menu-icon" />
          {!collapsed && "Announcements"}
        </NavLink>

        <NavLink to="/get-a-job" className="menu-item">
          <MdCampaign className="menu-icon" />
          {!collapsed && "post a job"}
        </NavLink>


        <NavLink to="/login" className="menu-item">
          <MdLogout className="menu-icon" />
          {!collapsed && "Sign Out"}
        </NavLink>
      </nav>
    </aside>
  );
}
