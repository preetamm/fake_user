import React from 'react';
import logo from './logo.svg';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component'
import CreateUserPage from  './pages/createUserPage/createUserPage.compoenent'
import Header from'./components/header/header.component'
import UpdateUserPage from './pages/updateUserPage/updateUserPage.compoenent'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/createuser' component={CreateUserPage}/>
        <Route exact path='/updateuser' component={UpdateUserPage}/>
      </Switch>
    </div>
  );
}


export default App;
