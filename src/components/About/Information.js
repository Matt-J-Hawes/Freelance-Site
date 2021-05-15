import React from 'react';
import {
    NavLink,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import {AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';
import { SiTreehouse } from 'react-icons/si';

// Three sub-links on about me section
const Information = () => {
    return(
        <div style = {{background: '#20368F'}}>
            <ul className = 'about-list'>
                <li className = 'about-option'><NavLink to = '/biography'><h2>Biography</h2></NavLink></li>
                <li className = 'about-option'><NavLink to = './cv'><h2>My CV</h2></NavLink></li>
                <li className = 'about-option'><NavLink to = './social-media'><h2>Social Media</h2></NavLink></li>
             </ul>
             <Switch>
             <Route exact path = '/'>
                 <div className = 'bio-container'>
                     <p>
                        Welcome. I am a designer, developer and frontend engineer. I have a passion for creating 
                        sleek and functional sites that look good. Originally coming from a house full of theatre 
                        professionals, I have a natural flair for creativity and always up for a challenge. Give me 
                        an idea and I will run with it... 
                     </p>
                     <Link to = '/biography'>
                         <button type='submit' className = 'cv-btn'>FIND OUT MORE</button>
                    </Link>
                 </div>
             </Route>
             <Route path = '/biography'>
                 <div className = 'bio-container'>
                    <p>
                        Hi! I am a Windsor based professional web-developer. I love music, going to the gym,
                        travelling and, of course, writing code! I taught myself to programme during the 2020 pandemic. 
                        Like many people, I was suddenly in a situation where I had no job and lots of free time. 
                    </p>
                    <p>
                        I started watching YouTube vidoes on the basics of HTML and CSS and before long, I was undergoing a full-stack
                        JavaScript tech degree with Treehouse. Nine months later I landed my first Job in the tech industry as 
                        a professional frontend web developer at Oleeo. Since then I have worked with small businesses to government clients. I hope I can make you a beautiful site too!
                    </p>
                 </div>
             </Route>
             <Route path = '/cv'>
                <div className = 'bio-container'>
                    <p>
                        Alongside my freelance career, I am also a professional frontend web developer for Oleeo. 
                        I create micro career sites for Oleeo's clients. The micro site is used alongside a client's 
                        main site to target a specific area or campaign they are trying to promote. 
                    </p>
                    <p>
                        At Oleeo I am also responsible for overseeing, assisting and creating new brands. If you would 
                        like to download and view my whole CV, please download it below.
                    </p>
                        <Link to = '../../../public/Matt-Hawes-CV.png'  target='_blank' download>
                            <button type='submit' className = 'cv-btn'>DOWNLOAD CV</button>
                        </Link>
                </div>
             </Route>
             <Route path = '/social-media'>
                 <div className = 'bio-container'>
                     <p>Let's connect?</p>
                     <p>
                        I am not always the most active on social media, but if you would like to see my 
                        VERY ocassional updates, then give me a follow! If you would like to follow my code 
                        and recent projects, my GitHub is also linked below.
                     </p>
                     <div className = 'social-container'>
                        <a href='https://twitter.com/MattHawes8' target='_blank' rel="noopener noreferrer">
                            <AiOutlineTwitter className = 'social-icon' />
                        </a>
                        <a href='https://github.com/Matt-J-Hawes' target='_blank' rel="noopener noreferrer">
                            <AiOutlineGithub className = 'social-icon' />
                        </a>
                        <a href='https://www.linkedin.com/in/matt-j-hawes/' target='_blank' rel="noopener noreferrer">
                            <AiOutlineLinkedin className = 'social-icon'  />
                        </a>
                        <a href='https://teamtreehouse.com/matthawes' target='_blank' rel="noopener noreferrer">
                            <SiTreehouse className = 'social-icon' />
                        </a>
                     </div>
                 </div>
             </Route>
             <Route>
                 <p style={{background: '#20368F'}}>I don't think you meant to do that!</p>
                 <p style={{background: '#20368F'}}><Link style={{color: 'white'}} to = '/biography'>Go back</Link></p>
             </Route>
             </Switch>
        </div>
    );
};

export default Information