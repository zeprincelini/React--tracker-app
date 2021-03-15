import PropTypes from 'prop-types'; 
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import './Header.css'
// import Button from '../button/button';

const Header = ({title, toggler, showForm}) => {
    const location = useLocation();
    return(
        <div className="row">
            <div className="col-sm-12">
                <div className ="head">
                    <h1>{title}</h1>
                    <div className='nav'>
                        <Link to ="/"><button className="btn btn-default">Home</button></Link>
                        <Link to ="/about"><button className="btn btn-default">About</button></Link>
                    </div>
                </div>
                { location.pathname === '/' && <div className="icon">
                    {showForm ? <FaTimes onClick= {toggler} style={{fontSize: '35px', backgroundColor: '#920000', color: '#ffff', borderRadius: '50%'}}/> : <FaPlus onClick= {toggler} style={{fontSize: '35px', backgroundColor: '#007BFF', color: '#ffff', borderRadius: '50%'}}/>}
                </div>}
            </div>
        </div>
    )
}

Header.defaultProps = {
    title : "Test Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//css in js
// const headingStyle = {
//     backgroundColor: 'yellow',
//     color: '#000000'
// }

export default Header;