import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = ()=>{
        signOut(auth);
    }
    return (
        
            <div className='header-all'>
                <h4>TravelPlan</h4>
                <nav>
                <Link to='/'>Home</Link>
                <Link to='blog'>Blog</Link>
               
                
            </nav>
            </div>
            
            
      
        
    );
};

export default Header;