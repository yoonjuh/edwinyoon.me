import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import DevJuhyung from '../containers/developer_juhyung'
import PersonJuhyung from '../containers/person_juhyung'

class App extends Component {
  
  render() {
    
    return (
      <div>
        <p>
          <Link to="/PersonJuhyung">
            Person Juhyung 
          </Link>
          <Link to="/DevJuhyung">
            Developer Juhyung
          </Link>
        </p>
      </div>
    );
  }
}


export default App;