
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const Navbar = () => {
  // Your navbar code here. You can use React Router for navigation links.
    const { user } = useContext(AuthContext)
  return (
    <>
    <div className="navbar">
        <div className="navContainer">
        
          <Link to ="/">
            <span className="logo">TheHotels.com</span>
          </Link>
            {user ? user.username : (
              <>
              <div className="navItems">
              <Link to='/Register' type="button" className="navButton">Register</Link>
              <Link to='/login' type="button" className="navButton">Login</Link>
            </div>
          </>)}
        </div>
    </div>
    </>
  )
}

export default Navbar