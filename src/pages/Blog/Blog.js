import React from 'react';
import './Blog.css'
import logo from '../../image/boy.png'

const Blog = () => {
    return (
        <div className='show-all'>
            <div className="show">
                <div className="show-1">
                    <h3>Travelling to new place are gain some of the most rewarding experience</h3>
                    <p>Travel in the Middle Ages offered hardships and challenges, however, it was important to the economy and to society. The wholesale sector depended (for example) on merchants dealing with/through caravans. </p>
                    <a href="">Read More</a>
                </div>
                <div className="show-2">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='change'></div>
        </div>
        
    );
};

export default Blog;