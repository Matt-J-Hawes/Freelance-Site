import React from 'react';
import {ReactComponent as MyProfile} from '../../Images/profile.svg';
import {ReactComponent as MyImage} from '../../Images/about-me.svg';
import {ReactComponent as MySocial} from '../../Images/social.svg';
import {ReactComponent as Mycv} from '../../Images/cv.svg';
import '../../stylesheets/About.css';
import Information from './Information';
import {
    BrowserRouter as Router,
    Route,
    Switch} from 'react-router-dom';

const About = () => {
    return(
        <div className = 'about-container'>
            <div className = 'about-titles'>
                <h2>Hello!</h2>
                <h1>About Me</h1>
            </div>
            <div className = 'about-info-container'>
                <Router>
                    <Information />
                <Switch>
                <Route exact path = '/'>
                    <MyProfile className = 'svg'/>
                </Route>
                <Route path = '/biography'>
                    <MyImage className = 'svg'/>
                </Route>
                <Route path = '/cv'>
                    <Mycv className = 'svg'/>
                </Route>
                <Route path = '/social-media'>
                    <MySocial className = 'svg'/>
                </Route>
                <Route>
                    <MyImage className = 'svg'/>
                </Route>
                </Switch>
                </Router>
           </div>
        </div>
    );
};

export default About