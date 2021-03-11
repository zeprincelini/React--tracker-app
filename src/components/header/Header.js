import PropTypes from 'prop-types';
import './Header.css'
import Button from '../button/button';

const Header = ({title}) => {
    const clickMe = () =>{
        console.log('clicked')
    }
    return(
        <header className ="head">
            <h1>{title}</h1>
            <Button color='#ffff' text="Add Task" onClick={clickMe} />
        </header>
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