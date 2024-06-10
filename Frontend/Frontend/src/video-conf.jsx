// Conferention.js

import React from 'react';
import './video-conf.css';
import { Link } from 'react-router-dom';

function Conferention() {
    return (
        <div className='confs'>
            <div className='kz-conf-box conf-box'>
                <h2>Қазақша конференция</h2>
                <h4>админ</h4>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg' id='prof-img1' alt='photo'></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg' id='prof-img1' alt='photo'></img>
                <Link to='/video-conf-chat'>
                    <button>Қосылу</button>
                </Link>
            </div>

            <div className='ru-conf-box conf-box'>
                <h2>Русская конференция</h2>
                <h4>admin</h4>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg' id='prof-img2' alt='photo'></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg' id='prof-img2' alt='photo'></img>
                <Link to='/video-conf-chat'>
                    <button>Подключиться</button>
                </Link>
            </div>

            <div className='eng-conf-box conf-box'>
                <h2>Engilsh Conferention</h2>
                <h4>admin</h4>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg' id='prof-img3' alt='photo'></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg' id='prof-img3' alt='photo'></img>
                <Link to='/video-conf-chat'>
                    <button>Connect</button>
                </Link>
            </div>
        </div>
    );
}

export default Conferention;
