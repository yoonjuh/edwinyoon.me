import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import reducers from './reducers'
import App from './components/app'
import DevJuhyung from './containers/developer_juhyung';
import PersonJuhyung from './containers/person_juhyung';


const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/PersonJuhyung" component={PersonJuhyung} />
          <Route path="/DevJuhyung" component={DevJuhyung} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);