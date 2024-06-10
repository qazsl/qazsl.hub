import './Word_navigator-app.css';
import { Link } from 'react-router-dom';

function Topics_navigator_app() {
    return(
    <div className='direction1'>
        <Link to="/topics" id='topics'>Тақырыптар</Link>
        <hr className='hr2'/>
    </div>
    );
}

export default Topics_navigator_app;