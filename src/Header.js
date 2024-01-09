import "./css/Header.css";
import Socials from "./Socials";

function Header() {
    return (
        <header className="header header-fixed-top">
            <div className="header-wrapper">
                <div className="header-icon">
                    KIRILL SHIROKOV
                </div>

                <ul className="header-nav-container">
                    <li class="header-nav-item"><a class="nav-item-child nav-item-hover" href="#about">About</a></li>
                    <li class="header-nav-item"><a class="nav-item-child nav-item-hover" href="#experience">Experience</a></li>
                    <li class="header-nav-item"><a class="nav-item-child nav-item-hover" href="#contact">Contact</a></li>
                </ul>

                <Socials/>
            </div>
        </header>
    )
}

export default Header;