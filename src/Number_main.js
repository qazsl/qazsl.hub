// Alphabet.js
import Words_navigator from './words-nav-comp';
import React, { useState } from 'react';



import './Numbers.css';
import { Link } from 'react-router-dom';
import Number_navigator_app from './Number_navigator_app';


function Number_main() {
    const [showImages, setShowImages] = useState(Array(6).fill(false));

    return(
        <div className='kazakh-alphabet'>
            <Number_navigator_app/>
            <div className='alphabets-container'>
            <div className='numbers'>
                {showImages.map((showImage, index) => (
                    <div className='visit' key={index} onMouseEnter={() => setShowImages(images => images.map((image, i) => i === index ? true : image))} onMouseLeave={() => setShowImages(images => images.map((image, i) => i === index ? false : image))}>
                        <div className='border'>
                            <div className='letters'>
                                {showImage ? (
                                    <img id='letter-img' src={getImageSrc(index)} alt={getLetter(index)} />
                                ) : (
                                    <Link id='letters'>{getLetter(index)}</Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

function getImageSrc(index) {
    switch(index) {
        case 0:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1885679/pub_64ec794f39814150a4a8a48d_64ec7a4dbc3bf63c2e215bbd/scale_1200";
        case 1:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1209363/pub_64ec794f39814150a4a8a48d_64ec7b5040c6e93d68fa7efa/scale_2400";
        case 2:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_64ec794f39814150a4a8a48d_64ec7a56a530e566825a6541/scale_2400";
        case 3:
            return "https://avatars.dzeninfra.ru/get-zen_doc/936895/pub_64ec794f39814150a4a8a48d_64ec7a68139b66559720fe37/scale_1200";
        case 4:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1885679/pub_64ec794f39814150a4a8a48d_64ec7a4dbc3bf63c2e215bbd/scale_1200";
        case 5:
            return "";
        case 6:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_64ec794f39814150a4a8a48d_64ec7a56a530e566825a6541/scale_2400";
        case 7:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_64ec794f39814150a4a8a48d_64ec7a56a530e566825a6541/scale_2400";
        case 8:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1885679/pub_64ec794f39814150a4a8a48d_64ec7a4dbc3bf63c2e215bbd/scale_1200";
        case 9:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1209363/pub_64ec794f39814150a4a8a48d_64ec7b5040c6e93d68fa7efa/scale_2400";
        case 10:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_64ec794f39814150a4a8a48d_64ec7a56a530e566825a6541/scale_2400";
        case 11:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_64ec794f39814150a4a8a48d_64ec7a56a530e566825a6541/scale_2400";
        case 12:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1209363/pub_64ec794f39814150a4a8a48d_64ec7b5040c6e93d68fa7efa/scale_2400";
        case 13:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_64ec794f39814150a4a8a48d_64ec7a56a530e566825a6541/scale_2400";
        case 14:
            return "https://avatars.dzeninfra.ru/get-zen_doc/1245815/pub_64ec794f39814150a4a8a48d_64ec7a56a530e566825a6541/scale_2400";
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
            return "...";
        case 6:
            return "7";
        case 7:
            return "8";
        case 8:
            return "9";
        case 9:
            return "10";
        case 10:
            return "11";
        case 11:
            return "12";
        case 12:
            return "13";
        case 13:
            return "14";
        case 14:
            return "15";
        default:
            return "";
    }
}

export default Number_main;
