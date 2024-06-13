import './Header.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; // Импортируем useState
import waveimg from './img/qazsl-logo-2.png';
import Info from './Info';

function Header() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };

    return (    
        <header>
            <Link to='/'>
                <img id='logo-images' src={waveimg} alt="Logo"/>
                <Link to="/" id="logo">QazSL</Link>
            </Link>
            <div className='auth'>
                <Link to='/number_realtime' style={{ textDecoration: 'none' }}>
                    <a id='register'>Real Time Hand</a>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                    <a id='sign'>Басты бет</a>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                    <a id='sign'>Контактілер</a>
                </Link>
            </div>
            <div className="menu">
                    <input
                        type="checkbox"
                        id="burger-checkbox"
                        className="burger-checkbox"
                        checked={isChecked}
                        onChange={toggleCheckbox}
                    />
                    <label htmlFor="burger-checkbox" className="burger" onClick={(e) => e.stopPropagation()}></label>
                    <ul className="menu-list">
                            <li><a className="menu-item">Аппробациялар</a></li>
                            <li><a href='https://t.me/jest06_bot' className="menu-item">Телеграм-бот</a></li>
                            <li><a href='https://www.youtube.com/watch?v=-D9lV-6YNd0&feature=youtu.be' className="menu-item">Фильм</a></li>
                            <Link style={{ textDecoration: 'none' }}>
                                <li><a className="menu-item">Алгоритмдер</a></li>
                            </Link>
                            <Link to='/test' style={{ textDecoration: 'none' }}>
                                <li><a className="menu-item">Тест</a></li>
                            </Link>
                            <Link to='/oiyn' style={{ textDecoration: 'none' }}>
                                <li><a className="menu-item">Ойын</a></li>
                            </Link>
                    </ul>
                </div>
        </header>
    );
}

export default Header;