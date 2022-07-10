import React from "react";
import {NavLink} from "react-router-dom";
import "./sidebar-menu.scss"

class SidebarMenu extends React.Component {
    activeStyle: string;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.activeStyle = "sidebar-menu__active"
    }

    render() {
        return (
            <div className="sidebar-menu">
                <NavLink to="about-me" className={({isActive}) => isActive? this.activeStyle : undefined}>About Me</NavLink>
                <NavLink to="projects" className={({isActive}) => isActive? this.activeStyle : undefined}>Projects</NavLink>
                <NavLink to="skills" className={({isActive}) => isActive? this.activeStyle : undefined}>Skills</NavLink>
                <NavLink to="curriculum-vitae" className={({isActive}) => isActive? this.activeStyle : undefined}>CV</NavLink>
                <NavLink to="contact" className={({isActive}) => isActive? this.activeStyle : undefined}>Contact</NavLink>
            </div>
        )
    }
}

export default SidebarMenu;