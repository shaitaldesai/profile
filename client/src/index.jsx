import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import App from './components/App.js';
import UserInfo from './containers/UserInfo.js';
import ReduxPromise from 'redux-promise';
const createSoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);

class Hello extends Component {
  render () {
    return <div>Hello!</div>
  }
}

class Goodbye extends Component {
  render () {
    return <div>Goodbye!</div>
  }
}

ReactDOM.render(
  <Provider store={ createSoreWithMiddleware(reducers) } >
   <BrowserRouter>
      <Switch>
        <Route path="/profile" component={UserInfo} />
        <Route path="/" component={Goodbye} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);