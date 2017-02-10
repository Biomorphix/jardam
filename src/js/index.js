import ReactDOM from 'react-dom';
import React from 'react';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Auth from './services/auth';
import CreateTaskMenu from './views/CreateTaskMenu';
import AllCategories from './views/AllCategories';
import UserProfile from './views/UserProfile';
import AllTasks from './views/AllTasks';
import Task from './views/Task';
import Notifications from './views/Notifications';


// function requireAuth(nextState, replace) {
//   if (!Auth.loggedIn()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }

const app = (
    <Router history={hashHistory}>
    <Route path="/" component={HomePage}></Route>
    {/*<Route path="/" component={Layout} onEnter={requireAuth}> </Route>*/}
    <Route path="login" component={LoginPage}></Route>
    <Route path="createTask" component={CreateTaskMenu}></Route>
    <Route path="allCategories" component={AllCategories}></Route>
    <Route path="userProfile" component={UserProfile}></Route>
    <Route path="allTasks" component={AllTasks}></Route>
    <Route path="Task" component={Task}></Route>
    <Route path="notifications" component={Notifications}></Route>
  </Router>
)

ReactDOM.render(app,
  document.getElementById('root')
);