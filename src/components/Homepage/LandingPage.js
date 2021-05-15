import React from 'react';
import IntroBanner from './IntroBanner';
import SectionOneBanner from './SectionOneBanner';
import Plans from './Plans';
import '../../stylesheets/Homepage.css';

const LandingPage = () => {
    return(
        <div>
           <IntroBanner />
           <SectionOneBanner />
           <Plans />
        </div>
    );
};

export default LandingPage