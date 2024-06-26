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
  const [option, setOption] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const {user}= useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOption((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const navigate = useNavigate();
  
  const {dispatch} = useContext(SearchContext)
  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, option } });
    navigate('/hotels');
  };
  return (
    <>
      <div className="header">
        <div className={type === 'list' ? "headerContainer list" : "headerContainer"}>
          <div className="headerList">
            <div className="headerlistitem active">
              <FaBed />
              <span> Stay</span>
            </div>
            <div className="headerlistitem active">
              <FaPlane />
              <span> Flights </span>
            </div>
            <div className="headerlistitem active">
              <FaCar />
              <span> Car Rentals </span>
            </div>
            <div className="headerlistitem active">
              <FaHotel />
              <span> Attractions </span>
            </div>
            <div className="headerlistitem active">
              <FaTaxi />
              <span> Airport Taxis </span>
            </div>
          </div>
          
          {type !== 'list' && (
            <>
              <h1 className="headerTitle"> Life is Simple Enjoyful</h1>
              <p className="headerDisc">Hotel Booking life ko kerde assan</p>
              {!user&&<Link to='/login' className="headerBtn"> Signin / Register</Link>}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FaBed className="headerIcon" />
                  <input
                    type="text"
                    className="headerSearchInput"
                    placeholder="Where to go"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <BsPersonStanding className="headerIcon" />
                  <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                    {`${option.adults} Adults . ${option.children} Children . ${option.room} Room`}
                  </span>
                  {openOptions && (
                    <div className="option">
                      <div className="optionItem">
                        <span className="optiontext">Adults</span>
                        <div className="optionCounter">
                          <button disabled={option.adults < 2} className="optionCounterButton" onClick={() => handleOption("adults", "d")}>-</button>
                          <span className="optionCounterNumber">{option.adults}</span>
                          <button disabled={option.adults > 20} className="optionCounterButton" onClick={() => handleOption("adults", "i")}>+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optiontext">Children</span>
                        <div className="optionCounter">
                          <button disabled={option.children < 1} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                          <span className="optionCounterNumber">{option.children}</span>
                          <button disabled={option.children > 15} className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optiontext">Room</span>
                        <div className="optionCounter">
                          <button disabled={option.room < 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                          <span className="optionCounterNumber">{option.room}</span>
                          <button disabled={option.room > 20} className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <FaCalendar className="headerIcon" />
                  <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
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
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
