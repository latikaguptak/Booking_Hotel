import "./Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { FaBed, FaCar, FaHotel, FaPlane, FaTaxi } from 'react-icons/fa';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerlistitem">
                <FaBed/>
              <span> Stay</span>
            </div>
            <div className="headerlistitem">
                <FaPlane/>
              <span> Flights </span>
            </div>
            <div className="headerlistitem">
                <FaCar/>
              <span> Car Rentals </span>
            </div>
            <div className="headerlistitem">
                <FaHotel/>
              <span> Attrections </span>
            </div>
            <div className="headerlistitem">
                <FaTaxi/>
              <span> Airport Taxis </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
