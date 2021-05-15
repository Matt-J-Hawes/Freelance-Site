import React from 'react';

const Plans = () => {
    return(
        <div className = 'plans-container'>
            <div className = 'plan'>
                <h3 className = 'plans-title'>Starter</h3>
                <h2 className = 'price'>£149.99</h2>
                <ul className = 'price-plan'>
                    <li className = 'price-plan-item'>One page</li>
                    <li className = 'price-plan-item'>Static site</li>
                    <li className = 'price-plan-item'>All services mentioned above</li>
                </ul>
                <button className = 'plan-btn'>CHOOSE PLAN</button>
            </div>
            <div className = 'plan'>
                <h3 className = 'plans-title'>Professional</h3>
                <h2 className = 'price'>£699.99</h2>
                <ul className = 'price-plan'>
                    <li className = 'price-plan-item'>Unlimited pages</li>
                    <li className = 'price-plan-item'>Dynamic site</li>
                    <li className = 'price-plan-item'>Free SSL certificate</li>
                    <li className = 'price-plan-item'>All services mentioned above</li>
                </ul>
                <button className = 'plan-btn'>CHOOSE PLAN</button>
            </div>
            <div className = 'plan'>
                <h3 className = 'plans-title'>Enterprise</h3>
                <h2 className = 'price'>£1299.99</h2>
                <ul className = 'price-plan'>
                    <li className = 'price-plan-item'>All professional services included</li>
                    <li className = 'price-plan-item'>Free hosting for the first year</li>
                    <li className = 'price-plan-item'>Unlimited design changes</li>
                </ul>
                <button className = 'plan-btn'>CHOOSE PLAN</button>
            </div>
        </div>
    );
};

export default Plans