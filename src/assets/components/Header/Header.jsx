import "./Header.css";
import {
  FaBed,
  FaCalendar,
  FaCar,
  FaHotel,
  FaPlane,
  FaTaxi,
  
} from "react-icons/fa";
import { BsPersonStanding } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import {  Link, useNavigate } from "react-router-dom";


const Header = ({type}) => {
  const [destination, setDestination]=useState("")
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
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
  const handleOption=(name, operation)=>{
    setOption((prev)=>{
      return{
       ...prev,
        [name]: operation ==="i" ? option[name] +1 : option[name] -1,
    }
  });
}

const navigate = useNavigate();
const handleSearch =() =>{
  navigate('/hotels', {state:{destination,date,option}})
}

  return (
    <>
      <div className="header">
        <div className={type === 'list' ? "headerContainer list" : "headerContainer "}>
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
              <span> Attrections </span>
            </div>
            <div className="headerlistitem active">
              <FaTaxi />
              <span> Airport Taxis </span>
            </div>
          </div>
          
      {
        type !=='list' &&
        <>
        <h1 className="headerTitle"> Life is Simple Enjoyfull</h1>
          <p className="headerDisc">Hotel Booking life ko kerde assan</p>
          <Link to= '/login' className="headerBtn"> Signin / Register</Link>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaBed className="headerIcon" />
              <input
                type="text"
                className="headerSearchInput"
                placeholder="Where to going"
                onChange={(e)=>setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <BsPersonStanding className="headerIcon" />
              <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${option.adults}Adults . ${option.children}Children . ${option.room}Room`}</span>
              {openOptions && <div className="option">
                <div className="optionItem">
                  <span className="optiontext" >Adults</span>
                  <div className="optionCounter">
                    <button disabled={option.adults<2} className="optionCounterButton" onClick={()=> handleOption("adults", "d")}>-</button>
                    <span className="optionCounterNumber">{option.adults}</span>
                    <button disabled={option.adults>20} className="optionCounterButton"onClick={()=> handleOption("adults", "i")}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optiontext" >Children</span>
                  <div className="optionCounter">
                    <button disabled={option.children< 1} className="optionCounterButton" onClick={()=> handleOption("children", "d")}>-</button>
                    <span className="optionCounterNumber">{option.children}</span>
                    <button disabled={option.children>15} className="optionCounterButton" onClick={()=> handleOption("children", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optiontext">Room</span>
                  <div className="optionCounter">
                    <button disabled={option.room<1} className="optionCounterButton" onClick={()=> handleOption("room", "d")}>-</button>
                    <span className="optionCounterNumber">{option.room}</span>
                    <button disabled={option.room >20} className="optionCounterButton" onClick={()=> handleOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>
              }
            </div>
            <div className="headerSearchItem">
              <FaCalendar className="headerIcon" />
              <span className="headerSearchText">
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,"MM/dd/yyyy")}`}
                </span>
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
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
          }
        </div>
    </div>
  </>
  );
};

export default Header;
