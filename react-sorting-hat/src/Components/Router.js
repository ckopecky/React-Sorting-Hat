import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import App from '../App';
import Result from './Result';
const Router = () => {
    return (
        <React.Fragment>
            <Route exact path="/" component={Header}/>
            <Route path="/sortinghat" component={App}/>
            <Route path="/result" component={Result}/>
        </React.Fragment>
    );
};

export default Router;