import React, {useEffect, useContext, useState} from 'react'
import {
    BrowserRouter,
    Switch
} from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Context } from '../context/Context';
import { Dashboard } from '../components/Dashboard';
import { DashboardMedical } from '../components/DashboardMedical';
import { Home } from '../components/Home';
import { Register } from '../components/Register';
import { LoginMedical } from '../components/sections/LoginMedical';
import { NoticeOfPrivacy } from '../components/sections/NoticeOfPrivacy';

export const AppRouter = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const {login: loginContext} = useContext( Context );
    const {login} = loginContext
    console.log('ez',login.login);

    useEffect(() => {

	}, [loginContext])

    console.log('isLoggedIn', isLoggedIn);

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/medical-dashboard" component={DashboardMedical} isAutenticated={login.login}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard} isAutenticated={login.login}/>
                <Route exact path="/" component={ Home } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login-medical" component={ LoginMedical } />
                <Route path="/aviso-privacidad" component={ NoticeOfPrivacy } />
                {/* <Route exact path="/medical-dashboard" component={ DashboardMedical } /> */}
                {/* <Route exact path="/dashboard" component={ Dashboard } /> */}

                {/* <PublicRoute path="/" component={Home} isAutenticated={isLoggedIn}/>
                <PublicRoute path="/register" component={Register} isAutenticated={isLoggedIn}/>
                <PublicRoute path="/login-medical" component={LoginMedical} isAutenticated={isLoggedIn}/>
                <PublicRoute path="/aviso-privacidad" component={NoticeOfPrivacy} isAutenticated={isLoggedIn}/> */}
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}
