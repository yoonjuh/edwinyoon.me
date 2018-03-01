import React from 'react';

const Header = () => (
  <div>
    <header className="header">
      <div className="header__logo-box">{/* <img src={logo} alt="Logo" className="header__logo" /> */}</div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Edwin Yoon</span>
          <span className="heading-primary--sub">Javascript Developer</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          Profile
        </a>
      </div>
    </header>
  </div>
);

export default Header;
