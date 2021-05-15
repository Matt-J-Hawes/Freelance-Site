import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
    return(
        <header>
            <div className = 'logo'>
                <h3 className = 'logo-text'>MH</h3>
            </div>
            <nav>
                <ul className = 'navbar'>
                    <li className = 'nav'>
                        HOME
                    </li>
                    <li className = 'nav'>
                        ABOUT
                    </li>
                    <li className = 'nav'>
                        PROJECTS
                    </li>
                    <li className = 'nav'>
                        CONTACT
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header