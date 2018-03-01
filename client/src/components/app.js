import React from 'react';
import logo from '../style/img/logo_edd.png';

import Skills from './skills';
import Profile from './profile';
import Footer from './footer';

const App = () => (
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
    <main>
      <Skills />
      <Profile />
    </main>
    <div>
      <Footer />
    </div>
  </div>
);

export default App;
