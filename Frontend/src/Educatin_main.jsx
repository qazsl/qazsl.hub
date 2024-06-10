import React from "react";
import './Education_main.css'
import { Link } from 'react-router-dom';

function Education_main() {
    return(
      <div className="education_main">
        <img id="memoji_boy_2finger" src="https://github.com/Userq-ops/img-qazsl/blob/main/img/memoji_boy_2finger.png?raw=true"/>
        <img id="memoji_girl" src="https://github.com/Userq-ops/img-qazsl/blob/main/img/memoji%20girl%20%7B0-%5E%7D.png?raw=true"/>
        <img id="memoji_boy_like" src="https://github.com/Userq-ops/img-qazsl/blob/main/img/memoji_boy_like.png?raw=true"/>
        <h2 id="h2_education">Біз саңырау және нашар еститін адамдармен сөйлесуді жеңілдетіп, адамдарға ымдау тілін жақсырақ түсінуге көмектесетін мамандар тобымыз. Сондай-ақ біз мылқауларға жазбаша тілді түсіндіруге және түсінуге қолдау көрсетеміз, бұл олардың қоғамға интеграциялануын жеңілдетеді.</h2>
        <Link to='/education'>
            <button>Өту</button>
        </Link>
      </div>  
    );
}

export default Education_main;