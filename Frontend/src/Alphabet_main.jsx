import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Words_navigator from './words-nav-comp';
import './Alphabet_main.css';
import Words_navigator_app from './Word_navigator-app';

function Alphabet_main() {
    const [showImages, setShowImages] = useState(Array(6).fill(false));
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <div className='kazakh-alphabet'>
            {isHomePage && <Words_navigator_app />}
            <div className='alphabets-container'>
                <div className='alphabets1'>
                    {showImages.map((showImage, index) => (
                        <Link to={isHomePage ? `/alphabet` : ''} className={isHomePage ? 'visit1' : ''} key={index} onMouseEnter={() => setShowImages(images => images.map((image, i) => i === index ? true : image))} onMouseLeave={() => setShowImages(images => images.map((image, i) => i === index ? false : image))}>
                            <div className='border1'>
                                <div className='letters1'>
                                    {showImage ? (
                                        <img id='letter-img' src={getImageSrc(index)} alt={getLetter(index)} />
                                    ) : (
                                        <span id='letters1'>{getLetter(index)}</span>
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
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/%D0%90.jpg?raw=true";
        case 1:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/%D3%98.png?raw=true";
        case 2:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/%D0%91.png?raw=true";
        case 3:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/%D0%92.png?raw=true";
        case 4:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/%D0%93.png?raw=true";
        case 5:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/%D2%92.jpg?raw=true";
        case 6:
            return "https://github.com/Userq-ops/img-qazsl/blob/main/img/%D0%93.png?raw=true";
        default:
            return "";
    }
}

function getLetter(index) {
    switch(index) {
        case 0:
            return "A";
        case 1:
            return "Ә";
        case 2:
            return "Б";
        case 3:
            return "В";
        case 4:
            return "Г";
        case 5:
            return "Ғ";
        case 6:
            return "";
        default:
            return "";
    }
}

export default Alphabet_main;
