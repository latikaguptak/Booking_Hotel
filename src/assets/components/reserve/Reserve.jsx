
import './Reserve.css';

import useFetch from '../../hooks/useFetch';

const Reserve = ({setOpen, hotelId}) => {

  const {data, loading, error} = useFetch(`hotels/room/${hotelId}`)
  console.log('data',data)
  const handleChange = (e) => {
    console.log('e.target.value',e.target.value)
    // setRoomNumber(e.target.value)

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
              {item?.roomNumbers.map(roomNumbers=>(<>
                <div className= 'room'> 
                  <lable> {roomNumbers?.number} </lable>
                  <input type='select' value={roomNumbers._id} onChange={handleChange}/>
                </div>
              </>))}
              {error && <div className= 'error'>error... </div>}
          </div>
          </>
        ))}
        
      </div>
        
    </div>
    </>
  )
}

export default Reserve