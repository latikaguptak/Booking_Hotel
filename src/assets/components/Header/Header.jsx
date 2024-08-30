/* eslint-disable react/prop-types */
import "./Header.css";
import { useContext, useState } from "react";
import { FaBed, FaCalendar, FaCar, FaHotel, FaPlane, FaTaxi } from "react-icons/fa";
import { BsPersonStanding } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { SearchContext } from "../../../context/SearchContext";
import { AuthContext } from "../../../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleOptionChange = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
    navigate('/hotels');
  };

  return (
    <div className="header">
      <div className={type === 'list' ? "header__container list" : "header__container"}>
        <div className="header__nav-list">
          <div className="header__nav-item active">
            <FaBed />
            <span>Stay</span>
          </div>
          <div className="header__nav-item">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="header__nav-item">
            <FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="header__nav-item">
            <FaHotel />
            <span>Attractions</span>
          </div>
          <div className="header__nav-item">
            <FaTaxi />
            <span>Airport Taxis</span>
          </div>
        </div>

        {type !== 'list' && (
          <>
            <h1 className="header__title">Life is Simple and Enjoyful</h1>
            <p className="header__description">Hotel Booking makes life easier</p>
            {!user && <Link to='/login' className="header__button">Sign In / Register</Link>}
            <div className="header__search-bar">
              <div className="header__search-bar-item">
                <FaBed className="header__icon" />
                <input
                  type="text"
                  className="header__search-input"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header__search-bar-item">
                <FaCalendar className="header__icon" />
                <span onClick={() => setOpenDate(!openDate)} className="header__search-text">
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header__search-bar-item">
                <BsPersonStanding className="header__icon" />
                <span onClick={() => setOpenOptions(!openOptions)} className="header__search-text">
                  {`${options.adults} Adults · ${options.children} Children · ${options.room} Room`}
                </span>
                {openOptions && (
                  <div className="header__options">
                    {Object.keys(options).map((key) => (
                      <div className="header__option-item" key={key}>
                        <span className="header__option-text">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <div className="header__option-counter">
                          <button
                            disabled={options[key] <= 0}
                            className="header__option-counter-button"
                            onClick={() => handleOptionChange(key, "d")}
                          >-</button>
                          <span className="header__option-counter-number">{options[key]}</span>
                          <button
                            disabled={options[key] >= 20}
                            className="header__option-counter-button"
                            onClick={() => handleOptionChange(key, "i")}
                          >+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="header__search-bar-item">
                <button className="header__button" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
