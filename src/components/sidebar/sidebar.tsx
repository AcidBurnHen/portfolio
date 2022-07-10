import React from 'react';
import SidebarMenu from "./sidebar-menu";
import SocialIcons from "./social-icons";
import {Link} from "react-router-dom";
import "./sidebar.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/">
          <img alt="Marin Luic Portfolio" width="120" height="100" src="/mylogo.webp" />
        </Link>
        <SidebarMenu />
        <SocialIcons />
      </div>
    );
  }
}

export default Sidebar;
