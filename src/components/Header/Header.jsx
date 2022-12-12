import "./Header.scss";
import Logo from "../images/Logo.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import mapa from "../images/mapa.svg";

function Header() {
    return (
        <header>
            <nav className="menu-nav-bar">
                <img className="logo" src={Logo} alt="Logo Loyal" />
                <span></span>
                <ul className="menu-nav">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                    <li>
                        <a href="#endereco">Endereço</a>
                    </li>
                </ul>
                <div className="social-medias">
                    <a href="https://www.facebook.com/sintetizeioficial" target="_blank"> <img className="facebook" src={facebook} alt="facebook icone" /></a>
                    <a href="https://www.instagram.com/sintetizeioficial/" target="_blank"><img className="instagram" src={instagram} alt="instagram icone" /></a>
                    <a href=""> <img className="linkedin" src={linkedin} alt="linkedin icone" /></a>
                    <a href="https://www.google.com/maps/place/Sintetizei/@-22.9643685,-42.9677914,17z/data=!3m1!4b1!4m5!3m4!1s0x9989784e24a85f:0xd56178c42db0bfe2!8m2!3d-22.9643685!4d-42.9656027" target="_blank"> <img className="mapa" src={mapa} alt="mapa icone" /></a>
                </div>
            </nav>
        </header>
    )
}

export default Header;