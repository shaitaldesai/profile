import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import { HashRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import Profile from './containers/Profile';
import EditProfile from './containers/EditProfile';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
   applyMiddleware(promise)
 ));
ReactDOM.render(
  <Provider store={ store } > 
   <HashRouter>
      <Switch>
        <Route exact path="/" component={EditProfile} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);


// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import reducers from './reducers';
// import Profile from './containers/Profile';
// import EditProfile from './containers/EditProfile';
// import ReduxPromise from 'redux-promise';

// const createSoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);

// ReactDOM.render(
//   <Provider store={ createSoreWithMiddleware(reducers) } >
//    <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={EditProfile} />
//         <Route path="/profile" component={Profile} />
//       </Switch>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );
