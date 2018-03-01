import React from 'react';
import Juhyung from '../style/img/c1.jpg';

const Profile = () => (
  <section className="section-profile">
    <div className="row">
      <div className="col-1-of-4">
        <div className="profile-box">
          <i className="profile-box__icon icon-basic-spread" />
          <h3 className="heading-tertiary u-margin-bottom-small">Education</h3>
          <p className="profile-box__text">
            <b> Sheridan College</b>: <br /> Software Development Network engineering, Canada, 2017 ~ 2019<br />
            <br />I have been training HTML, CSS, Javascript, OOP(Java)
          </p>
        </div>
      </div>

      <div className="col-1-of-4">
        <div className="profile-box">
          <i className="profile-box__icon icon-basic-star" />
          <h3 className="heading-tertiary u-margin-bottom-small">Major SKills</h3>
          <p className="profile-box__text">
            <b>Javascript(ES6)</b>:<br /> React & Redux, Node.js & Testing(Mocha), Component & Data-flow design-pattern{' '}
            <br /> <br />Other strong points: variety npm modules, Sass
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="profile-box">
          <i className="profile-box__icon icon-basic-world" />
          <h3 className="heading-tertiary u-margin-bottom-small">Soft Skills</h3>
          <p className="profile-box__text-1">
            <li>Problem Solving</li>
            <li>Team-player </li>
            <li>Strong adaptability</li>
            <li>Willingness attitude</li>
            <li>Passion for new-tech</li>
            <li>Interpersonal Skills</li>
            <br />
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="profile-box">
          <i className="profile-box__icon icon-basic-heart" />
          <h3 className="heading-tertiary u-margin-bottom-small">Interests</h3>
          <p className="profile-box__text">Learning web-programming skills & Playing "GO"</p>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;
