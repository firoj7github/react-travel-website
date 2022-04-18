import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
                <div className="footer-1">
                <h3>Our Location</h3>
                <div className="flow"></div>
                <p>Gazipur</p>
                <p>Khulna</p>
                <p>Dhaka</p>
                <p>Kushtia</p>
                </div>


                <div className="footer-2">
                    <h3>Get In Touch</h3>
                    <div className="flow"></div>
                    <p>Feedback</p>
                    <p>Help</p>
                    <p>Support</p>
                    <p>Place</p>
                </div>
                <div className="footer-3">
                    <h3>Our Story</h3>
                    <div className="flow"></div>
                    <p>About us</p>
                    <p>Journey</p>
                    <p>Join</p>
                    <p>Location</p>
                </div>
                <div className="footer-4">
                    <h3>Best Place</h3>
                    <div className="flow"></div>
                   <p>Dubai City</p>
                   <p>Paris</p>
                   <p>London</p>
                   <p>Dhaka</p>


                </div>
            </div>
    );
};

export default Footer;