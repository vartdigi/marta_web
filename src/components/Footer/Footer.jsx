import './Footer.css';
import FooterPic from '../../../assets/Footer.png';

export const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="containter-footer">
          <img className="Footer" src={FooterPic} />
          <div className="Info">
            <div className="Email">
              <p>mmmarta.duo@gmail.com</p>
            </div>
            <div className="Insta">
              <p>@marta.duo</p>
            </div>
            <div className="Telefon">
              <p>+420774867166</p>
            </div>
          </div>
          <div className="footer-note">
            <span>Made with love</span>
            <small>© 2025 </small>
          </div>
        </div>
      </footer>
    </>
  );
};
