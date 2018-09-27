import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import Profile from './containers/Profile';
import EditProfile from './containers/EditProfile';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);

class Hello extends Component {
  render () {
    return <div>Hello!</div>
  }
}

class Account extends Component {
  render () {
    return <div>Account Settings</div>
  }
}

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) } >
   <BrowserRouter>
      <Switch>
        <Route path="/Profile" component={Profile} />
        <Route path="/EditProfile" component={EditProfile} />
        <Route path="/" component={Account} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);