import "./Header.css";
import { FaBed, FaCalendar, FaCar, FaHotel, FaPersonBooth, FaPlane, FaTaxi, FaUser, FaUsers } from 'react-icons/fa';
import{BsPersonStanding} from 'react-icons/bs';
import {DateRange} from 'react-date-range';
import { useState } from "react";
import'react-date-range/dist/styles.css';
import'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';
const Header = () => {
    const [date,setDate]= useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key:'selection'
        }
      ]);
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerlistitem active">
                <FaBed/>
              <span> Stay</span>
            </div>
            <div className="headerlistitem active">
                <FaPlane/>
              <span> Flights </span>
            </div>
            <div className="headerlistitem active">
                <FaCar/>
              <span> Car Rentals </span>
            </div>
            <div className="headerlistitem active">
                <FaHotel/>
              <span> Attrections </span>
            </div>
            <div className="headerlistitem active">
                <FaTaxi/>
              <span> Airport Taxis </span>
            </div>
          </div>
          <h1 className="headerTitle"> Life is Simple Enjoyfull</h1>
          <p className="headerDisc">
            Hotel Booking life ko kerde assan 
          </p>
          <button className="headerBtn"> Signin / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
                <FaBed className="headerIcon"/>
                <input type="text" className="headerSearchInput" placeholder="Where to going"/>
            </div>
            <div className="headerSearchItem">
                <BsPersonStanding className="headerIcon"/>
                <span className="headerSearchText">2 Adults 2 Childerns 1 Room</span>
            </div>
            <div className="headerSearchItem">
                <FaCalendar className="headerIcon"/>
                <span className="headerSearchText">
                    <span className="headerSearchText"> {`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(date[0].endDate, "mm/dd/yyyy")}`} </span>
                </span>
                <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                />
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
