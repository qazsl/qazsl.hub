// Alphabet.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Words_navigator from './words-nav-comp';
import './Alphabet.css';
import bir_jest from './jest/1.png';
import eki_jest from './jest/2.png';
import b_jest from './jest/Б.png';
import g_jest from './jest/Г.png';
import g1_jest from './jest/Ғ.jpg';
import v_jest from './jest/В.png';
import d_jest from './jest/Д.jpg';
import e_jest from './jest/Е.png';
import e1_jest from './jest/Ё.jpg';
import zh_jest from './jest/Ж.png';
import z_jest from './jest/З.jpg';
import i_jest from './jest/И.png';
import i1_jest from './jest/Й.jpg';
import k_jest from './jest/К.jpg';
import k1_jest from './jest/Қ.jpg';
import l_jest from './jest/Л.png';
import n1_jest from './jest/Ң.jpg';
import y2_jest from './jest/Ұ.jpg';
import ts_jest from './jest/Ц.jpg';
import sh_jest from './jest/Ш.png';
import sh1_jest from './jest/Щ.jpg';
import b2_jest from './jest/Ъ.jpg';
import yi_jest from './jest/Ы.png';
import iy_jest from './jest/І.png';
import b1_jest from './jest/Ь.jpg';
import ea_jest from './jest/Э.png';
import yu_jest from './jest/Ю.png';
import ya_jest from './jest/Я.png';

const alphabet = [
    { letter: '1', img: bir_jest },
    { letter: '2', img: eki_jest },
    { letter: 'Б', img: b_jest },
    { letter: 'В', img: v_jest },
    { letter: 'Г', img: g_jest },
    { letter: 'Ғ', img: g1_jest },
    { letter: 'Д', img: d_jest },
    { letter: 'Е', img: e_jest },
    { letter: 'Ё', img: e1_jest },
    { letter: 'Ж', img: zh_jest },
    { letter: 'З', img: z_jest },
    { letter: 'И', img: i_jest },
    { letter: 'Й', img: i1_jest },
    { letter: 'К', img: k_jest },
    { letter: 'Қ', img: k1_jest },
    { letter: 'Л', img: l_jest },
    { letter: 'Ң', img: n1_jest },
    { letter: 'Ұ', img: y2_jest },
    { letter: 'Ц', img: ts_jest },
    { letter: 'Ш', img: sh_jest },
    { letter: 'Щ', img: sh1_jest },
    { letter: 'Ъ', img: b2_jest },
    { letter: 'Ы', img: yi_jest },
    { letter: 'Ь', img: b1_jest },
    { letter: 'І', img: iy_jest },
    { letter: 'Ь', img: b1_jest },
    { letter: 'Э', img: ea_jest },
    { letter: 'Ю', img: yu_jest },
    { letter: 'Я', img: ya_jest }
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
