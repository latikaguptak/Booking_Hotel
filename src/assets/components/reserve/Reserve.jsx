/* eslint-disable react/prop-types */
import './Reserve.css';
import useFetch from '../../hooks/useFetch';
import { useContext, useState } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { toast } from 'react-toastify';

const Reserve = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [isReserving, setIsReserving] = useState(false); // State for handling the reservation process

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let dates = [];

    while (date <= end) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  // Check if a room is available for all selected dates
  const isAvailable = (roomNumber) => {
    return !roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
  };

  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      setIsReserving(true);
      console.log('Selected Rooms:', selectedRooms);
      // Make API call to reserve rooms
      // await axios.post('/reserve', { rooms: selectedRooms });
      toast.success("Reserved Successful", { autoClose: 5000 });
      setOpen(false);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Reservation failed', { autoClose: 5000 });
      // console.error('Reservation failed:', err);
    } finally {
      setIsReserving(false);
    }
  };

  return (
    <div className='reserve'>
      <div className='rContainer'>
        <button className='rClose' onClick={() => setOpen(false)}>
          &times;
        </button>
        <span className='rooms'>Select your rooms:</span>
        
        {loading ? (
          <div className='loading'>Loading...</div>
        ) : error ? (
          <div className='error'>Error loading data. Please try again later.</div>
        ) : (
          data?.map((item) => (
            <div className='rItem' key={item?._id}>
              <div className='rItemInfo'>
                <div className='rTitle'>{item?.title}</div>
                <div className='rDesc'>{item?.desc}</div>
                <div className='rMax'>
                  Max People: <b>{item?.maxPeople}</b>
                </div>
                <div className='rPrice'>Price: ${item?.price}</div>
                <img src={item?.imageUrl} alt={item?.title} className='rImage'/>
              </div>
              {item?.roomNumbers.map((roomNumber) => (
                <div className='room' key={roomNumber?._id}>
                  <label>{roomNumber?.number}</label>
                  <input
                    type='checkbox'
                    value={roomNumber?._id}
                    onChange={handleChange}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          ))
        )}
        {selectedRooms.length === 0 && !loading && !error && (
          <div className='warning'>Please select at least one room to proceed.</div>
        )}
        <button
          onClick={handleClick}
          className='rButton'
          disabled={selectedRooms.length === 0 || isReserving}
        >
          {isReserving ? 'Reserving...' : 'Reserve Now!'}
        </button>
      </div>
    </div>
  );
};

export default Reserve;
