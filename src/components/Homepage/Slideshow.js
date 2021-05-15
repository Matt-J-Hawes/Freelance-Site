import React, { Component } from 'react';
import {GoArrowLeft, GoArrowRight} from 'react-icons/go';
import Services from './Services';
import {FiCircle} from 'react-icons/fi';

const length = Services.length;

class Slideshow extends Component {
    state = {
        count: 0
    };
    
    // Automatically display next slide every 3 seconds
    componentDidMount(){
        setInterval(this.nextService, 3000)
    };
    
    // Get next slide for arrow click
    nextService = () => {
        if(this.state.count < length - 1){
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        } else{
            this.setState(prevState => ({
                count: 0
            }));
        };
    };

    // Get previous slide for arrow click
    prevService = () => {
        if(this.state.count > 0){
            this.setState(prevState => ({
                count: prevState.count - 1
            }));
        } else{
            this.setState(prevState => ({
                count: length - 1
            }));
        };
    };

    // Generate circles to be used as indicators for current slide
    getCircles = () => {
        const circles = []
        for(let x = 0; x < length; x++){
            circles.push(<FiCircle 
                key = {x}
                className = {this.state.count === x ? 'circle circle-active' : 'circle circle-not-active'} 
                onClick = {() => this.setState(prevState => ({
                        count: x
                    }))
                }
                />)
        }
        return circles
    };

    render(){
        return(
            <div className = 'container-right'>
                <div className = 'slides'>
                    <button onClick = {this.prevService} className = 'arrow-btn'><GoArrowLeft className = 'arrows'/></button>
                    {Services.map((item, index) => 
                    item.key === this.state.count &&
                    <div key = {item.key} className = 'active'>
                        { item.icon } 
                        <h2 className = 'description'>{item.desc}</h2>
                    </div>            
                    )}
                    <button onClick = {this.nextService} className = 'arrow-btn'><GoArrowRight className = 'arrows'/></button>
                </div>
                <div className = 'circles'>
                    {this.getCircles()}
                </div>
            </div>
        );
    };
};

export default Slideshow