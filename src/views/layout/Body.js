import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import DashboardPage from "../pages/DashboardPage";
import InstitutionsPage from "../pages/InstitutionPage";
import UsersPage from "../pages/UserPage";

const Body = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Body</h1>
            <Switch>
                <Route exact path={"/"}>
                    <DashboardPage/>
                </Route>
                <Route path={"/dashboard"}>
                    <DashboardPage/>
                </Route>
                <Route path={"/user"}>
                    <UsersPage/>
                </Route>
                <Route path={"/institution"}>
                    <InstitutionsPage/>
                </Route>
                <Route path={"*"}>
                    <Redirect to={"/dashboard"}/>
                </Route>
            </Switch>
            <h1>End body</h1>
        </div>
    );
};

export default Body;