import React from 'react';
import project1 from '../style/img/youtube.png';
import project2 from '../style/img/redux_todo_list.png';
import project3 from '../style/img/react-router.png';
import git from '../style/img/git.png';
import linked from '../style/img/Lin.png';
import fb from '../style/img/fb_1.png';
import gmail from '../style/img/gm.png';

const Skills = () => (
  <div>
    <section className="section-about" id="skills">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Things I have been stydying</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Javascript</h3>
          <p className="paragraph">
            In modern web development area, I believe that Javascript is a fundamental programming language that you
            must learn, that is why I have spent a lot of time for it, Check out my github account, you will see those
            projects I have been working on.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small" id="contact">
            Contact Links
          </h3>
          <p className="paragraph">
            <a href="https://github.com/EdwinYoon" target="_blank" className="contact-icon">
              <img src={git} alt="Github" className="social-icons" />
            </a>
            <a href="https://www.linkedin.com/in/juhyung-yoon-5a018114b/" target="_blank" className="contact-icon">
              <img src={linked} alt="Github" className="social-icons" />
            </a>
            <a href="https://www.facebook.com/JuhyungEdwinYoon" target="_blank" className="contact-icon">
              <img src={fb} alt="Github" className="social-icons" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ep160101@gmail.com"
              target="_blank"
              className="contact-icon"
            >
              <img src={gmail} alt="Github" className="social-icons" />
            </a>
          </p>
          {/* <a href="#" className="btn-text">
            See more &rArr;
          </a> */}
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <a href="https://github.com/EdwinYoon/react-router-blog" target="_blank">
              <img src={project3} alt="React-Redux" className="composition__photo composition__photo--p1" />
            </a>
            <a href="https://github.com/EdwinYoon/react-redux-todoList" target="_blank">
              <img src={project2} alt="Redux-app" className="composition__photo composition__photo--p2" />
            </a>
            <a href="https://github.com/EdwinYoon/react-youtubeApi" target="_blank">
              <img src={project1} alt="React-app" className="composition__photo composition__photo--p3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
