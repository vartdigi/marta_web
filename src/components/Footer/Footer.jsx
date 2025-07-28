import './Footer.css';
import FooterPic from '../../../assets/Footer.png';
import Email from '../../../assets/Email.png';
import Instagram from '../../../assets/Instagram.png';
import Phone from '../../../assets/Phone.png';

export const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="containter-footer">
          <img className="Footer" src={FooterPic} />
          <div className="Info">
            <img className='"Email' src={Email} />
            <img className='"Instagram' src={Instagram} />
            <img className='"Phone' src={Phone} />
          </div>
        </div>
      </footer>
    </>
  );
};
