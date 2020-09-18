import React from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ManagementDashboard from './components/Dashboard/ManagementDashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route exact path="/admin-dashboard" component={AdminDashboard}></Route>
          <Route exact path="/management-dashboard" component={ManagementDashboard}></Route>
          <Redirect from="*" to="/login"/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
