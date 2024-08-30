import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">TheHotels.com</span>
        </Link>
        {user ? (
          <span className="navUser">Welcome, {user.username}</span>
        ) : (
          <div className="navItems">
            <Link to='/register' className="navButton">Register</Link>
            <Link to='/login' className="navButton">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
