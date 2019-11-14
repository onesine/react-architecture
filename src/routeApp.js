import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import App from "./views/layout/App";
import LoginPage from "./views/pages/LoginPage";
import RegisterPage from "./views/pages/RegisterPage";

const RouteApp = () => {
    const login = true;

    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    { login ? <Redirect to={"dashboard"}/> : <LoginPage /> }
                </Route>
                <Route exact path="/register">
                    { login ? <Redirect to={"dashboard"}/> : <RegisterPage /> }
                </Route>
                <Route path={"*"}>
                    { login ? <App/> : <Redirect to={"/login"}/> }
                </Route>
            </Switch>
        </Router>
    );
};

export default RouteApp;