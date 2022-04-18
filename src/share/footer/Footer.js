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
                    <p>Where Should We Go Next?</p>
                </div>
                <div className="footer-3">
                    <h3>Our Story</h3>
                    <div className="flow"></div>
                    <p>About us</p>
                    <p>Design</p>
                    <p>Join</p>
                    <p>Architecture</p>
                </div>
                <div className="footer-4">
                    <h3>Best Designer</h3>
                    <div className="flow"></div>
                    <p> The art and technique of designing and building, as distinguished from the skills associated with construction.</p>


                </div>
            </div>
    );
};

export default Footer;