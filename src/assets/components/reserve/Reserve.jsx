
import './Reserve.css';

import useFetch from '../../hooks/useFetch';
import { useContext, useState } from 'react';
import { SearchContext } from '../../../context/SearchContext';

const Reserve = ({setOpen, hotelId}) => {
  const [selectedRooms,setSelectedRooms] = useState([])

  const {dates} = useContext(SearchContext)
  const getDatesInRange = (startDate, endDate)=> {
    const start=new Date(startDate)
    const end=new Date(endDate)
    const date=new Date(start.getTime());
    let dates=[]
    while(date=>end) {
      dates.push(new Date(date))
      date.setDate(date.getDate()+1)
    }
    return dates

  }
  console.log("dates",getDatesInRange())
  const {data, loading, error} = useFetch(`hotels/room/${hotelId}`)
  console.log('data',data)
  const handleChange = (e) => {
    const checked = e.target.checked
    const value = e.target.value
    setSelectedRooms(checked?[...selectedRooms, value] : selectedRooms.filter(items=>item !==value))
    // setRoomNumber(e.target.value)


  }
  console.log(selectedRooms)
  const handleClick = () => {
    console.log(selectedRooms)
    // make api call to reserve rooms
  }
  
  return (
    <>
    <div className='reserve'>
      <div className='rContainer'>
        {/* <FaFontAwesomeIcon icon={FaCircleXmark}
        className='rClose'
        onClick={()=>setOpen(false)}
        /> */}
        <span className='rooms'> Select your rooms: </span>
        {data?.map((item)=>(
          <>
          <div className='rItem'>
            <div className='rItemInfo'>
              <div className='rTitle'>{item?.title} </div>
              <div className='rDesc'>{item?.desc} </div>
              <div className='rMax'>Max People: <b>{item?.maxPeople}</b> </div>
              <div className= 'rPrice'>{item?.price}</div>
              <img 
              src = {item?.imageUrl} 
              alt=''
              />
            </div>
              {item?.roomNumbers.map(roomNumber=>(<>
                <div className= 'room'> 
                  <lable> {roomNumber?.number} </lable>
                  <input type='checkbox' value={roomNumber._id} onChange={handleChange}/>
                </div>
              </>))}
              {error && <div className= 'error'>error... </div>}
          </div>
      
          </>
        ))}
        <button onClick = {handleClick} className='rbutton'> Reserved Now!</button>
        
      </div>
        
    </div>
    </>
  )
}

export default Reserve