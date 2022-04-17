import React from 'react';
import './Service.css'
import icon from '../../../image/boat.png'
import icon1 from '../../../image/room.png'
import icon2 from '../../../image/swim.png'

const Service = () => {
    return (
        <div className='service-total'>
            <h2>Our Service</h2>
            <div className="service">
                <div className="service-1">
                    <img src={icon2} alt="" />
                    <h3>Swiming Service</h3>
                    <h5>$400.25</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, animi.</p>
                    <a href="">Read More</a>
                </div>
                <div className="service-2">
                <img src={icon1} alt="" />
                    <h3>Residant Service</h3>
                    <h5>$300.07</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, animi.</p>
                    <a href="">Read More</a>
                </div>
                <div className="service-3">
                <img src={icon} alt="" />
                    <h3>Boat Service</h3>
                    <h5>$700.92</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, animi.</p>
                    <a href="">Read More</a>
                </div>
            </div>
            
        </div>
    );
};

export default Service;