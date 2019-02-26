import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import AddMentor from './AddMentor';
import Header from '../Header/Header'


class Addlist extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="aside-form">
                        <div className="aside">
                            <div className="buttonSwitch">
                                <NavLink exact to="/Learner" className="buttonSwitch_Item" activeClassName="buttonSwitch_Active">Add Learner</NavLink>
                                <NavLink to="/Mentor" className="buttonSwitch_Item" activeClassName="buttonSwitch_Active">Add Mentor</NavLink>
                                <NavLink to="/Database" className="buttonSwitch_Item" activeClassName="buttonSwitch_Active">Add Database</NavLink>
                            </div>
                        </div>
                        <div className="form">
                        <Router>
                            <Switch>
                            <Route path="/Mentor" component={AddMentor}></Route>
                            </Switch>
                        </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addlist;