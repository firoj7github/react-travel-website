import React from 'react';
import './Show.css'
import logo from '../../../image/boy.png'

const Show = () => {
    return (
        <div className='show-all'>
            <div className="show">
                <div className="show-1">
                    <h4>Travelling to new place are gain some of the most rewardingexperience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia exercitationem optio et neque reiciendis molestiae obcaecati perspiciatis dolorum odio itaque quas veritatis unde aliquid expedita nam ab, vero quae.</p>
                    <a href="">Read More</a>
                </div>
                <div className="show-2">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Show;
