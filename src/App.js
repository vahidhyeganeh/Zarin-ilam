import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/Main'
import Test from './components/test/Test'
import PostDetails from './components/test/postDetails'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Page404 from './components/test/404'
import {ContextProvider} from './components/context'

const App = () => {

    return (
        <ContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route path={'/test'} component={Test}/>
                    <Route path={'/postDetails/:pId'} component={PostDetails}/>
                    <Route component={Page404}/>
                </Switch>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;
