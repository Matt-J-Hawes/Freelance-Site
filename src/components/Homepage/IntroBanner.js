import React from 'react';
import Typewriter from 'typewriter-effect';
import Slideshow from './Slideshow';

const IntroBanner = () => {
    return(
        <div className = 'intro-container'>
          <div className = 'container-left'>
            <h2 className = 'sub-title'>
                Take your business online today.
            </h2>
            <h1 className = 'title'>
                Matt Hawes
            </h1>
            <h1 className = 'title-break'>
            <Typewriter 
                   options={{autoStart: true, delay: 80}}
                   onInit={(typewriter) => {
                       typewriter
                       .typeString('Web Solutions.')
                       .pauseFor(1000)
                       .deleteChars(10)
                       .typeString('Design.')
                       .pauseFor(1000)
                       .deleteChars(7)
                       .typeString('Development.').start()
                   }}
                />
            </h1>
            <p className = 'hero-text'>
                Independent website design and development with ongoing technical support
            </p>
            <button className = 'main-btn'>
                START SITE
            </button>
          </div>
          <Slideshow />
        </div>
    );
};


export default IntroBanner