import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');

    // Dispatch logout action to update context state
    dispatch({ type: 'LOG_OUT' });

    // Redirect to login page
    navigate('/login');
    toast.success("Logout Successful", { autoClose: 5000 });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="logo_link" to="/">
          <span className="logo">TheHotels.com</span>
        </Link>
        {user ? (
          <div className="navUserActions">
            <span className="navUser">Welcome, {user.username}</span>
            <button className="navButton logoutButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
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
