
import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';
import waveimg from './img/qazsl-logo-2.png';
import Info from './Info';

function Header() {
    return (    
        <header>
            <Link to='/'>
                <img id='logo-images' src={waveimg}/>
                <Link to="/" id="logo">QazSL</Link>
            </Link>
            <div className='auth'>

            </div>
        </header>
    );
}

export default Header;
