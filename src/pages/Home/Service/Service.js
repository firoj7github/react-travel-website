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
                    <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel.</p>
                    <a href="/ServiceDetail">Read More</a>
                </div>
                <div className="service-2">
                <img src={icon1} alt="" />
                    <h3>Residrant Service</h3>
                    <h5>$800.07</h5>
                    <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel.</p>
                    <a href="/ServiceDetail">Read More</a>
                </div>
                <div className="service-3">
                <img src={icon} alt="" />
                    <h3>Boat Service</h3>
                    <h5>$200.92</h5>
                    <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel.</p>
                    <a href="/ServiceDetail">Read More</a>
                </div>
            </div>
            
        </div>
    );
};

export default Service;