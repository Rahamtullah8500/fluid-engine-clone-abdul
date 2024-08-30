import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container my_container">
        <div className="footer-icon">
        MyLogo
          {/* <img src="/path/to/icon.png" alt="Logo" className="footer-logo" /> */}
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#support" className="footer-link">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li><a href="#web" className="footer-link">Web Design</a></li>
              <li><a href="#seo" className="footer-link">SEO Optimization</a></li>
              <li><a href="#marketing" className="footer-link">Marketing</a></li>
              <li><a href="#analytics" className="footer-link">Analytics</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-list">
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#guides" className="footer-link">Guides</a></li>
              <li><a href="#case-studies" className="footer-link">Case Studies</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="#facebook" className="social-icon"><FaFacebook /></a>
          <a href="#twitter" className="social-icon"><FaTwitter /></a>
          <a href="#instagram" className="social-icon"><FaInstagram /></a>
          <a href="#linkedin" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
