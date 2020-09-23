import React from 'react';
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import {Redirect, Route, Switch} from "react-router";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: true,
        }
    }

    render() {
        return (
            <div>
                {this.state.isAuth && <Switch>
                    <Route path='/dashboard' render={() => <Dashboard/>}/>
                    <Redirect to='/dashboard'/>
                </Switch>}
                {!this.state.isAuth && <Switch>
                    <Route path='/signIn'
                           render={() => <SignIn/>}/>
                    <Route path='/signUp'
                           render={() => <SignUp/>}/>
                    <Redirect to='/signUp'/>
                </Switch>}
            </div>
        );
    }
}

export default App;
