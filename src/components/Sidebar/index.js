import "./index.scss"
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope,faHome,faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to='/'>
                <img src={LogoS} alt="logo" />
                <img src={LogoSubtitle} alt="logosubtitle" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                 target="_blank"
                 rel="noreferrer"
                 href="https://www.linkedin.com/in/shubham-k-4ba3b911a/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                 target="_blank"
                 rel="noreferrer"
                 href="https://github.com/Shub1970">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                 target="_blank"
                 rel="noreferrer"
                 href="https://www.youtube.com/channel/UCdvmuPeZOJJQL9eToIuSLCg/videos">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
           
        </ul>
    </div>
  )
}

export default Sidebar