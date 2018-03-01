import React from 'react';
import logo from '../style/img/EdwinLogo.png';

const Footer = () => (
  <div className="footer">
    <div className="footer__logo-box">
      <img src={logo} alt="Logo" className="footer__logo" />
    </div>
    <div className="row">
      <div className="col-1-of-4">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Profile
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-4">placeholder</div>
      <div className="col-2-of-4">
        <p className="footer__copyright">
          <a href="#" className="footer__link">
            Juhyung Yoon
          </a>'s Profile-Website
          <br />
          Copyright, CSS & Sass(The original design of this web-page)&copy; by Jonas Schmedtmann.<br />
          Javascript: &copy; Juhyung Edwin Yoon
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
