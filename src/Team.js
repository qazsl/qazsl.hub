import React from 'react';
import './Team.css'; // Import the CSS file for styling
import Raikhan from './img/Райхан.jpg';
import Olzhas from './img/Олжас.jpg';
import Lyazzat from './img/Ляззат.jpeg';
import Tamara from './img/Тамара.jpeg';

const Team = () => {
    return (
            <div className='boxes'>
              <div className='team-title'>
                <h1>Біздің Топ</h1>
              </div>
            <div className="business-card">
            <div className="icon">
            <img src={Tamara} className='tamara'/>
            </div>
            <div className="info">
                <h2>Тамара Жукабаева</h2>
                <p className="role">Құрылтайшы</p>
                <p className="email">E-mail: <a href="mailto:tamara_kokenovna@mail.ru">tamara_kokenovna@mail.ru</a></p>
                <p className="phone">Телефон: +77017268544</p>
            </div>
            </div>
            <div className="business-card">
            <div className="icon">
            <img src={Raikhan} className='raikhan'/>
            </div>
            <div className="info">
                <h2>Paйxaн Сенгирбаева</h2>
                <p className="role">Сурдопедагог</p>
                <p className="email">E-mail: <a href="mailto:raia_v.i.p@mail.ru">raia_v.i.p@mail.ru</a></p>
                <p className="phone">Телефон: +77016242892</p>
            </div>
          </div>
          <div className="business-card">
              <div className="icon">
              <img src={Lyazzat} className='lyazzat'/>
              </div>
              <div className="info">
                  <h2>Ляззат Жолшиева</h2>
                  <p className="role">Тең құрылтайшы</p>
                  <p className="email">E-mail: <a href="mailto:lazzat.zhol.81@gmail.com">lazzat.zhol.81@gmail.com</a></p>
                  <p className="phone">Телефон: +77016581481</p>
              </div>
              </div>
              <div className="business-card">
              <div className="icon">
              <img src={Olzhas} className='olzhas'/>
              </div>
              <div className="info">
                  <h2>Олжас Аманаев</h2>
                  <p className="role">Frontend-Designer</p>
                  <p className="email">E-mail: <a href="mailto:oljas.apple@gmail.com">oljas.apple@gmail.com</a></p>
                  <p className="phone">Телефон: +77064291612</p>
              </div>
          </div>
        </div>
    );
};

export default Team;
