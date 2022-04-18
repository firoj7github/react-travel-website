import React from 'react';
import './ServiceDetail.css'
import './ServiceDetail.css'
import icon from '../../../../image/boat.png'
import icon1 from '../../../../image/room.png'
import icon2 from '../../../../image/swim.png'
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    return (

        <div>
            <Link className='check-btn' to='/Checkout'>checkout </Link>
        
        <div className='service-total-all'>
            {/* <h2>Our Service</h2> */}
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
                    <h3>Residrant Service</h3>
                    <h5>$800.07</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, animi.</p>
                    <a href="">Read More</a>
                </div>
                <div className="service-3">
                <img src={icon} alt="" />
                    <h3>Boat Service</h3>
                    <h5>$200.92</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, animi.</p>
                    <a href="">Read More</a>
                </div>
            </div>
            
        </div>
        </div>
        
    );
};

export default ServiceDetail;