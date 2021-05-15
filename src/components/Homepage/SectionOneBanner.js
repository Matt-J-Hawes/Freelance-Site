import React from 'react';
import {GiLaptop, GiSmartphone} from 'react-icons/gi';
import {DiGoogleAnalytics} from 'react-icons/di';

const SectionOneBanner = () => {
    return(
        <div>
            <div className = 'sub-title-container'>
                <h2>
                    Services
                </h2>
                <h1>
                    What can I do?
                </h1>
            </div>
            <div className = 'what-i-can-do'>
                <div className = 'service-container'>
                    <GiLaptop className =  'what-i-can-do-icon' />
                    <h2>
                        Web Development
                    </h2>
                    <p>
                        Using the latest technologies, I will develop and design a beautiful, functioning 
                        site to suit all your business needs. Together we can create, reimagine or utilise 
                        a current brand to boost your business.
                    </p>
                </div>
                <div className = 'service-container'>
                    <GiSmartphone className = 'what-i-can-do-icon' />
                    <h2>
                        Mobile Friendly
                    </h2>
                    <p>
                        Did you know that over 50% of internet users are browsing on a mobile device? 
                        My mobile first approach to design and development will ensure your users will 
                        have the best experience possible. 
                    </p>
                </div>
                <div className = 'service-container'>
                    <DiGoogleAnalytics className = 'what-i-can-do-icon' />
                    <h2>
                        Analytics
                    </h2>
                    <p>
                        A website isn't much good if you can't be found on Google! I will make sure your site
                        has the best chance of rising through the google search rankings by using best practices to
                        boost your sites potential.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionOneBanner;