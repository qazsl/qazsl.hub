// Alphabet.js
import Number_navigator_app from './Number_navigator_app';
import React, { useState } from 'react';



import './Numbers_main.css';
import { Link } from 'react-router-dom';


function Numbers() {
    const [showImages, setShowImages] = useState(Array(6).fill(false));

    const isHomePage = location.pathname === '/';

    return(
        <div className='kazakh-alphabet'>
            <Number_navigator_app/>
            <div className='alphabets-container'>
            <div className='alphabets'>
                {showImages.map((showImage, index) => (
                        <Link to={isHomePage ? `/numbers` : ''} className={isHomePage ? 'visit1' : ''} key={index} onMouseEnter={() => setShowImages(images => images.map((image, i) => i === index ? true : image))} onMouseLeave={() => setShowImages(images => images.map((image, i) => i === index ? false : image))}>
                        <div className='border'>
                            <div className='letters'>
                                {showImage ? (
                                    <img id='letter-img' src={getImageSrc(index)} alt={getLetter(index)} />
                                ) : (
                                    <span id='letters'>{getLetter(index)}</span>
                                )}
                            </div>
                        </div>
                        </Link>
                ))}
            </div>
        </div>
        </div>
    );
}

function getImageSrc(index) {
    switch(index) {
        case 0:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/1.png?raw=true";
        case 1:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/2.png?raw=true";
        case 2:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/3.png?raw=true";
        case 3:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/4.png?raw=true";
        case 4:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/5.png?raw=true";
        case 5:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/6.png?raw=true";
        default:
            return "";
    }
}


function getLetter(index) {
    switch(index) {
        case 0:
            return "1";
        case 1:
            return "2";
        case 2:
            return "3";
        case 3:
            return "4";
        case 4:
            return "5";
        case 5:
            return "6";
        default:
            return "";
    }
}

export default Numbers;
