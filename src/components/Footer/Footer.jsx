import './Footer.css';
import FooterPic from '../../../assets/Footer.png';
import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import Sipka from '../../../assets/sipka.svg';

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="containter-footer">
        <div className="sipka">
          <img src={Sipka} alt="šipka" className="arrow" />
        </div>
        <img className="Footer" src={FooterPic} alt="Footer" />
        <div className="Info">
          <div className="Email item">
            <FaEnvelope className="icon" />
            <a href="mailto:mmmarta.duo@gmail.com">mmmarta.duo@gmail.com</a>
          </div>
          <div className="Insta item">
            <FaInstagram className="icon" />
            <a
              href="https://www.instagram.com/mmmarta.duo"
              target="_blank"
              rel="noopener noreferrer"
            >
              @marta.duo
            </a>
          </div>
          <div className="Telefon item">
            <FaPhone className="icon" />
            <a href="tel:+420774867166">+420774867166</a>
          </div>
        </div>
        <div className="footer-note">
          <span>Made with love</span>
          <small>© 2025</small>
        </div>
      </div>
    </footer>
  );
};
