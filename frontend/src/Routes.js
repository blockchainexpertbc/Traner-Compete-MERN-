import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Views/Home'
import UserDetailPage from './Views/UserDetailPage'

export default function Routes({users}) {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path = '/' exact render = { props => <Home {...props } users = {users}/> }/>
                    <Route path = '/userDetail/:userId' exact render = { props => <UserDetailPage {...props } users = {users}/> }/>
                    <Redirect to = '' />
                </Switch>
        </BrowserRouter>
    )
}
