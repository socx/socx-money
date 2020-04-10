import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import AboutUs from './containers/AboutUs';
import Support from './containers/Support';
import Login from './containers/Login';
import Register from './containers/Register';
import ForgotPassword from './containers/ForgotPassword';
import NotFound from './containers/NotFound';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/welcome' component={Welcome} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/support' component={Support} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/forgotPassword' component={ForgotPassword} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
