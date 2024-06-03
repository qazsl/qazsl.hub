import './Word_navigator-app.css';
import { Link } from 'react-router-dom';

function Words_navigator_app() {
    return(
    <div className='direction1'>
        <Link to="/alphabet" id='alphabet'>Әріптер</Link>
        <hr className='hr2'/>
    </div>
    );
}

export default Words_navigator_app;