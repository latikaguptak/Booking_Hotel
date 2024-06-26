import './List.css'
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { Navigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../../context/SearchContext';

const List =() =>{
  const {city, dates, options,dispatch } = useContext(SearchContext);
  const [destination ,setDestination] = useState(city);
  const [date ,setDate] = useState(dates);
  const [openDate ,setOpenDate] = useState(false);
  const [option ,setOption] = useState(options);
  const [min ,setMin] = useState(undefined);
  const [max ,setMax] = useState(undefined);
  // console.log(location);
  const Hoteldetail=()=>{
    Navigate ("/Hotels:id")
  }
  const { data , loading, error, reFetch } = useFetch(`hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)
  console.log(data);
  const handleClick = ()=>{
    reFetch();
  }
  const handleDateChange=()=>{

    dispatch({ type: 'NEW_SEARCH', payload: { destination, date, option } });
  
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
            <input onChange={e=>setDestination(e.target.value)} placeholder={destination} type="text" />
          </div>
          <div className='lsItem'>
            <label>Check-in-Date</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(date[0]?.endDate, 'MM/dd/yyyy') }`}</span>
            {openDate && <DateRange onChange={(item) => setDate(item.selection)}
            minDate={new Date()} 
            ranges={date}
            onClick={handleDateChange}/>}
          
           <div className='lsItem'>
            <label>Option</label>
            <div className='lsOption'>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Min Price <small>per night</small></span>
              <input onChange={e=>setMin((e.target.value)-1)} type='number' className='lsOptionInput'/>
            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText' >Max Price <small>per night</small></span>
              <input onChange={e=>setMax((e.target.value)+1)} type='number' className='lsOptionInput'/>
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
          <button onClick={handleClick}>Search</button>
          </div>
          <div onClick={Hoteldetail} className='listResults'>
            {loading ? <div className='loading'>Loading...</div> : (
              <>
              {data?.map((item)=>(<>
                <SearchItem items={item} key={item._id}/>
                </>))}
              </>
                
              )
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;