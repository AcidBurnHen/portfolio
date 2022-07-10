import React from "react";
import {Link} from "react-router-dom";
import "./sidebar-menu.scss"

class SidebarMenu extends React.Component {
    render() {
        return (
            <div className="sidebar-menu">
                <Link to="about-me">About Me</Link>
                <Link to="projects">Projects</Link>
                <Link to="skills">Skills</Link>
                <Link to="curriculum-vitae">CV</Link>
                <Link to="contact">Contact</Link>
            </div>
        )
    }
}

export default SidebarMenu;