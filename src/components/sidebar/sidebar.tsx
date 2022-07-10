import React from 'react';
import SidebarMenu from "./sidebar-menu";
import SocialIcons from "./social-icons";
import "./sidebar.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <picture>
          <img alt="Marin Luic Portfolio" width="100px" height="100px" src="/mylogo.webp" />
        </picture>
        <SidebarMenu />
        <SocialIcons />
      </div>
    );
  }
}

export default Sidebar;
