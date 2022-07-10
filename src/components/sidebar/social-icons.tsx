import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import "./social-icons.scss";

class SocialIcons extends React.Component {
    render() {
        return (
            <div className="social-icons">
                <div className="social-icons__github" >
                <BsGithub  />
                </div>
                <div className="social-icons__linkedin">
                <BsLinkedin />
                </div>
            </div>
        )
    }
}

export default SocialIcons;