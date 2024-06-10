import './Words-nav-comp.css';
import { Link } from 'react-router-dom';

function Words_navigator() {
    return(
    <div className='direction'>
        <Link to="/alphabet" id='alphabet'>Әріптер</Link>
        <Link to="/numbers" id='numbers'>Сандар</Link>
        <Link to="/topics" id='topics'>Тақырыптар</Link>
        <hr/>
    </div>
    );
}

export default Words_navigator;