import './List.css'
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';

const List =() =>{
  const location = useLocation();
  const [destination ,setDestination] = useState(location.state.destination);
  const [date ,setDate] = useState(location.state.date);
  const [option ,setOption] = useState(location.state.option);
  console.log(location);
  return (
    <div>
      <Navbar/>
      <Header type ="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
          <h1 className='lsTitle'> Search </h1>
          <div className='lsItem'>
            <h2> Destination</h2>
            <input placeholder={destination} type="text" />
          </div>
          <div className='lsItem'>
            <h2> Check-in-Date</h2>
            <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, 'MM/dd/yyyy') }`}</span>
          </div>
          </div>
          <div className='listResults'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default List;