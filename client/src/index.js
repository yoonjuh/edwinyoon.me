import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
