import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='portfolio-link' to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/joaqu%C3%ADn-s%C3%A1nchez-12b135265/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/johaco" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"  className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/johaco.x?igsh=ZzlkYTZkZWVmb3J5" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"  className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/joaquín-sánchez-12b135265" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"  className="anchor-icon"/>
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar
