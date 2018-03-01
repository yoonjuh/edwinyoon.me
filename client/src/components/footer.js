import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from '../style/img/EdwinLogo.png';
import App from './app';

const Footer = () => (
  <div className="footer">
    <div className="footer__logo-box">
      <img src={logo} alt="Logo" className="footer__logo" />
    </div>
    <div className="row">
      <div className="col-2-of-4">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link">Contact</a>
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
            <li className="footer__item">
              <a href="#" className="footer__link">
                Linkedin
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Github
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col-1-of-4">
        <div className="footer__navigation">
          <div className="footer__list">
            <div className="footer__item">placeholder</div>
          </div>
        </div>
      </div> */}
      <div className="col-2-of-4">
        <p className="footer__copyright">
          <a href="#" className="footer__link">
            Juhyung Yoon
          </a>'s Profile-Website
          <br />
          Copyright, Interface Design & Ssss &copy; by Jonas Schmedtmann.<br />
          Javascript: &copy; Juhyung Edwin Yoon
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
