import React from 'react';
import project1 from '../style/img/youtube.png';
import project2 from '../style/img/redux_todo_list.png';
import project3 from '../style/img/react-router.png';

const Skills = () => (
  <div>
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Things I have been stydying</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Javascript</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">Others</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
          <a href="#" className="btn-text">
            See more &rArr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={project3} alt="React-Redux" className="composition__photo composition__photo--p1" />
            <img src={project2} alt="Redux-app" className="composition__photo composition__photo--p2" />
            <img src={project1} alt="React-app" className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
