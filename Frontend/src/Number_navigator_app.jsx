import './Word_navigator-app.css';
import { Link } from 'react-router-dom';

function Number_navigator_app() {
    return(
    <div className='direction1'>
        <Link to="/numbers" id='numbers'>Сандар</Link>
        <hr className='hr2'/>
    </div>
    );
}

export default Number_navigator_app;