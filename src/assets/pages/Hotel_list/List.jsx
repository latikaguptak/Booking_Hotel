import './List.css'
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';

const List =() =>{
  const location = useLocation();
  const [destination ,setDestination] = useState(location.state.destination);
  const [date ,setDate] = useState(location.state.date);
  const [openDate ,setOpenDate] = useState(false);
  const [option ,setOption] = useState(location.state.option);
  console.log(location);
  const Hoteldetail=()=>{
    Navigate ("/Hotels:id")
  }
  return (
    <div>
      <Navbar/>
      <Header type ="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
          <h1 className='lsTitle'> Search </h1>
          <div className='lsItem'>
            <label> Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className='lsItem'>
            <label>Check-in-Date</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, 'MM/dd/yyyy') }`}</span>
            {openDate && <DateRange onChange={(item) => setDate(item.selection)}
            minDate={new Date()} 
            ranges={date}
            />}
          
           <div className='lsItem'>
            <label>Option</label>
            <div className='lsOption'>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Min Price <small>per night</small></span>
              <input type='number' className='lsOptionInput'/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Min Price <small>per night</small></span>
              <input type='number' className='lsOptionInput'/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Max Price <small>per night</small></span>
              <input type='number' className='lsOptionInput'/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Adults </span>
              <input type='number' min={1} className='lsOptionInput' placeholder={option.adults}/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Children </span>
              <input type='number' min={0} className='lsOptionInput' placeholder={option.children}/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Room </span>
              <input type='number' min={1} className='lsOptionInput' placeholder={option.room}/>
              </div>
            </div>
           </div>
           
          </div>
          <button>Search</button>
          </div>
          <div onClick={Hoteldetail} className='listResults'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;