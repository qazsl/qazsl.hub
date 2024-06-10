// Alphabet.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Words_navigator from './words-nav-comp';
import './Alphabet.css';
import bir_jest from './jest/1.png';
import eki_jest from './jest/2.png';
import ush_jest from './jest/3.png';
import tort_jest from './jest/4.png';
import bes_jest from './jest/5.png';
import alty_jest from './jest/6.png';
import jeti_jest from './jest/7.png';
import segiz_jest from './jest/8.png';
import togyz_jest from './jest/9.png';
import on_jest from './jest/10.png';
import onbir_jest from './jest/11.png';
import oneki_jest from './jest/12.png';
import onush_jest from './jest/13.png';
import ontort_jest from './jest/14.png';
import onbes_jest from './jest/15.png';
import onalty_jest from './jest/16.png';
import onjeti_jest from './jest/17.png';
import onsegiz_jest from './jest/18.png';
import ontogyz_jest from './jest/19.png';
import shiyrma_jest from './jest/20.png';


const alphabet = [
    { letter: '1', img: bir_jest },
    { letter: '2', img: eki_jest },
    { letter: '3', img: ush_jest },
    { letter: '4', img: tort_jest },
    { letter: '5', img: bes_jest },
    { letter: '6', img: alty_jest },
    { letter: '7', img: jeti_jest },
    { letter: '8', img: segiz_jest },
    { letter: '9', img: togyz_jest },
    { letter: '10', img: on_jest },
    { letter: '11', img: onbir_jest },
    { letter: '12', img: oneki_jest },
    { letter: '13', img: onush_jest },
    { letter: '14', img: ontort_jest },
    { letter: '15', img: onbes_jest },
    { letter: '16', img: onalty_jest },
    { letter: '17', img: onjeti_jest },
    { letter: '18', img: onsegiz_jest },
    { letter: '19', img: ontogyz_jest },
    { letter: '20', img: shiyrma_jest }
];

function Alphabet() {
    const [showImages, setShowImages] = useState(Array(alphabet.length).fill(false));

    const handleMouseEnter = (index) => {
        setShowImages(images => images.map((img, i) => i === index ? true : img));
    };

    const handleMouseLeave = (index) => {
        setShowImages(images => images.map((img, i) => i === index ? false : img));
    };

    return (
        <div className='kazakh-alphabet'>
            <Words_navigator />
            <div className='alphabets'>
                {alphabet.map((item, index) => (
                    <Link to={`/${item.letter}`} key={index} className='visit' 
                          onMouseEnter={() => handleMouseEnter(index)} 
                          onMouseLeave={() => handleMouseLeave(index)}>
                        <div className='border'>
                            <div className='letters'>
                                {showImages[index] ? <img src={item.img} alt={item.letter} /> : <span id='letters'>{item.letter}</span>}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Alphabet;
