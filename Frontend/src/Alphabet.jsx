// Alphabet.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Words_navigator from './words-nav-comp';
import './Alphabet.css';
import a_jest from './jest/А.jpg';
import a1_jest from './jest/Ә.png';
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
import m_jest from './jest/М.png';
import n_jest from './jest/Н.png';
import n1_jest from './jest/Ң.jpg';
import o_jest from './jest/О.png';
import o1_jest from './jest/Ө.png';
import p_jest from './jest/П.png';
import r_jest from './jest/Р.png';
import s_jest from './jest/С.png';
import y_jest from './jest/У.png';
import y2_jest from './jest/Ұ.jpg';
import y1_jest from './jest/Ү.png';
import f_jest from './jest/Ф.png';
import x_jest from './jest/Х.png';
import xa_jest from './jest/Һ.png';
import ts_jest from './jest/Ц.jpg';
import ch_jest from './jest/Ч.png';
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
    { letter: 'A', img: a_jest },
    { letter: 'Ә', img: a1_jest },
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
    { letter: 'М', img: m_jest },
    { letter: 'Н', img: n_jest },
    { letter: 'Ң', img: n1_jest },
    { letter: 'О', img: o_jest },
    { letter: 'Ө', img: o1_jest },
    { letter: 'П', img: p_jest },
    { letter: 'Р', img: r_jest },
    { letter: 'С', img: s_jest },
    { letter: 'У', img: y_jest },
    { letter: 'Ұ', img: y2_jest },
    { letter: 'Ү', img: y1_jest },
    { letter: 'Ф', img: f_jest },
    { letter: 'Х', img: x_jest },
    { letter: 'Һ', img: xa_jest },
    { letter: 'Ц', img: ts_jest },
    { letter: 'Ч', img: ch_jest },
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
