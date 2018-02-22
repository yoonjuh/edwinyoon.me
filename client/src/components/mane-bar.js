import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeneBar extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/skills">Skills</Link>
          <Link to="edu">Education</Link>
          <Link to="interests">Interests</Link>
        </p>
      </div>
    );
  }
}

export default MeneBar;
