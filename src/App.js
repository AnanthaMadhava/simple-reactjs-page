import React, { Component } from 'react';
import Login from './components/login';
import Addlist from './components/addlist';
import AddMentor from './components/addlist/AddMentor';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Details from './components/details';
import AddLearner from './components/addlist/AddLearner';
import Learner from './components/addlist/Learner'; 
import Mentor from './components/addlist/Mentor';
import Database from './components/addlist/Database';
//import AddLearner from './components/addlist'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/Learner" component={Learner}></Route>
          <Route exact path="/Mentor" component={Mentor}></Route>
          <Route exact path="/Database" component={Database}></Route>
          <Route exact Path="/details" component={Details}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
