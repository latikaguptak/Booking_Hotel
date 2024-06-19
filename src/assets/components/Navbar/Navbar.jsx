
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navContainer">
          <p>Hotel Booking</p>
            <span className="logo"></span>
            <div className="navItems">
              <Link to='/Register' type="button" className="navButton">Register</Link>
              <Link to='/login' type="button" className="navButton">Login</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar