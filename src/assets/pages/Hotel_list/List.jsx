import './List.css';
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { useContext, useState } from 'react';
import { format, isValid } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../../context/SearchContext';

const List = () => {
  const { city, dates, options, dispatch } = useContext(SearchContext);
  const [destination, setDestination] = useState(city || "");
  const [date, setDate] = useState(dates || [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    }
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(options || {
    adults: 1,
    children: 0,
    room: 1,
  });
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const { data, loading, error, reFetch } = useFetch(`hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);
  
  const safeFormatDate = (date) => {
    const parsedDate = new Date(date);
    return isValid(parsedDate) ? format(parsedDate, "MM/dd/yyyy") : "Invalid Date";
  };

  const handleClick = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, date, option } });
    reFetch();
  };

  const handleDateChange = (item) => {
    setDate([item.selection]);
    dispatch({ type: 'NEW_SEARCH', payload: { destination, date: [item.selection], option } });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>

            <div className='lsItem'>
              <label>Destination</label>
              <input 
                onChange={e => setDestination(e.target.value)} 
                value={destination} 
                type="text" 
                placeholder="Enter your destination"
              />
            </div>

            <div className='lsItem'>
              <label>Check-in-Date</label>
              <span className="datedesign"  onClick={() => setOpenDate(!openDate)}>
                {date[0]?.startDate && date[0]?.endDate
                  ? `${safeFormatDate(date[0].startDate)} to ${safeFormatDate(date[0].endDate)}`
                  : "Select a date"}
              </span>
              {openDate && (
                <DateRange
                  onChange={handleDateChange}
                  minDate={new Date()}
                  ranges={date}
                  className="datePicker"
                />
              )}
            </div>

            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOption'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Min Price <small>per night</small></span>
                  <input 
                    onChange={e => setMin(e.target.value)} 
                    type='number' 
                    className='lsOptionInput'
                    placeholder="Min price"
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Max Price <small>per night</small></span>
                  <input 
                    onChange={e => setMax(e.target.value)} 
                    type='number' 
                    className='lsOptionInput'
                    placeholder="Max price"
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Adults</span>
                  <input 
                    type='number' 
                    min={1} 
                    className='lsOptionInput' 
                    value={option.adults} 
                    onChange={(e) => setOption({ ...option, adults: e.target.value })}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Children</span>
                  <input 
                    type='number' 
                    min={0} 
                    className='lsOptionInput' 
                    value={option.children} 
                    onChange={(e) => setOption({ ...option, children: e.target.value })}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Room</span>
                  <input 
                    type='number' 
                    min={1} 
                    className='lsOptionInput' 
                    value={option.room} 
                    onChange={(e) => setOption({ ...option, room: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <button className='searchButton' onClick={handleClick}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          
          <div className='listResults'>
            {loading ? (
              <div className='loading'>Loading...</div>
            ) : error ? (
              <div className='error'>Error fetching data. Please try again later.</div>
            ) : (
              data?.map((item) => (
                <SearchItem item={item} key={item._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
