import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Main.css'
import {  faGlobe, faHotel, faPlane,  faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <div className='main'>
            <div className="main-section-1">
                <div className="round-1 text-center">
                <FontAwesomeIcon className='icon-1' icon={faPlane} />
                    <h4 className='text-center'>Traveller Tours</h4>
                    <p className=''>Travel is the movement of people . 
                    <br/>

                    <span className='ps-2'>adipisicing elit ?</span> </p>


                </div>
                <div className="round-2 text-center">
                    <FontAwesomeIcon className='icon-2' icon ={faGlobe}></FontAwesomeIcon>
                <h4 className='text-center'>Explore World</h4>
                    <p className=''>Travel is the movement of people . 
                    <br/>

                    <span className='ps-2'>adipisicing elit ?</span> </p>
                </div>
                <div className="round-3 text-center">
                    <FontAwesomeIcon className='icon-3' icon ={faSuitcaseRolling}></FontAwesomeIcon>
                <h4 className='text-center'>Tour Plan</h4>
                    <p className=''>Travel is the movement of people . 
                    <br/>

                    <span className='ps-2'>adipisicing elit ?</span> </p>
                </div>
                <div className="round-4  text-center">
                    <FontAwesomeIcon className='icon-4' icon={faHotel}></FontAwesomeIcon>
                <h4 className='text-center'>Manage Restruent</h4>
                    <p className=''>Travel is the movement of people. 
                    <br/>

                    <span className='ps-2'>adipisicing elit ?</span> </p>
                </div>
            </div>
            
        </div>
    );
};

export default Main;