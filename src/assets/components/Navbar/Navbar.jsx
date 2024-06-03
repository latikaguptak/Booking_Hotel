
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navContainer">
          <p>Hotel Booking</p>
            <span className="logo"></span>
            <div className="navItems">
              <button type="button" className="navButton">Register</button>
              <button type="button" className="navButton">Login</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar