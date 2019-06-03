/**
 * Created by agros on 03.06.2019.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
//import CreateProfile from '../profile-form/CreateProfile';
//import EditProfile from '../profile-form/EditProfile';
//import AddExperience from '../profile-form/AddExperience';
//import AddEducation from '../profile-form/AddEducation';
//import Profiles from '../profiles/AllProfiles';
//import Profile from '../profile/Profile';
//import Posts from '../posts/Posts';
//import SinglePost from '../singlePost/SinglePost';
import NotFound from '../layout/NotFound';

const asyncProfiles = asyncComponent(()=> {
    return import('../profiles/AllProfiles');
});

const asyncProfile = asyncComponent(()=> {
    return import('../profile/Profile');
});

const asyncCreateProfile = asyncComponent(()=> {
    return import('../profile-form/CreateProfile');
});

const asyncEditProfile = asyncComponent(()=> {
    return import('../profile-form/EditProfile');
});

const asyncAddExperience = asyncComponent(()=> {
    return import('../profile-form/AddExperience');
});

const asyncAddEducation = asyncComponent(()=> {
    return import('../profile-form/AddEducation');
});

const asyncPosts = asyncComponent(()=> {
    return import('../posts/Posts');
});

const asyncSinglePost = asyncComponent(()=> {
    return import('../singlePost/SinglePost');
});

const Routes  = () => {
    return (
        <section className="container">
            <Alert/>
            <Switch>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/profiles" component={asyncProfiles}/>
                <Route exact path="/profile/:id" component={asyncProfile}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <PrivateRoute exact path="/create-profile" component={asyncCreateProfile}/>
                <PrivateRoute exact path="/edit-profile" component={asyncEditProfile}/>
                <PrivateRoute exact path="/add-experience" component={asyncAddExperience}/>
                <PrivateRoute exact path="/add-education" component={asyncAddEducation}/>
                <PrivateRoute exact path="/posts" component={asyncPosts}/>
                <PrivateRoute exact path="/posts/:id" component={asyncSinglePost}/>
                <Route component={NotFound}/>
            </Switch>
        </section>
    );
};

export default Routes;