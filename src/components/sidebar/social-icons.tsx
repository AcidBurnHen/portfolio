import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import "./social-icons.scss";

class SocialIcons extends React.Component {
    render() {
        return (
            <div className="social-icons">
                <a href="https://github.com/AcidBurnHen" rel="noreferrer" target="_blank" className="social-icons__github" >
                <BsGithub  />
                </a>
                <a href="https://www.linkedin.com/in/marin-luic/" rel="noreferrer" target="_blank"  className="social-icons__linkedin">
                <BsLinkedin />
                </a>
            </div>
        )
    }
}

export default SocialIcons;