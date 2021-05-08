import React from 'react';
import {AppState} from "./AppState";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomeScreen} from "./screens/HomeScreen";
import {Months} from "./screens/Months";
import {Weeks} from "./screens/Weeks";
import {Years} from "./screens/Years";

export const MainApp = () => {
    return (
        <AppState>
            <div className={'min-w-screen min-h-screen bg-purple-500 p-3 md:bg-red-500 lg:bg-green-500'}>
                <Router>
                    <Switch>
                        <Route exact path={'/'} component={HomeScreen}/>
                        <Route exact path={'/Months'} component={Months}/>
                        <Route exact path={'/Weeks'} component={Weeks}/>
                        <Route exact path={'/Years'} component={Years}/>
                    </Switch>
                </Router>
            </div>
        </AppState>
    );
};