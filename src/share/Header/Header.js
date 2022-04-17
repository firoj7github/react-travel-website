import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        
            <div className='header-all'>
                <nav>
                <Link to='/'>Home</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/About'>About</Link>
                <Link to='/Login'>Login</Link>
            </nav>
            </div>
            
            
      
        
    );
};

export default Header;