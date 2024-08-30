/* eslint-disable react/prop-types */
import { Link, Navigate } from 'react-router-dom'
import './SearchItem.css'

const SearchItem = ({items}) => {
    const Hoteldetail=()=>{
        Navigate ("/Hotels/:id")
      }
  return (
    <div className='searchItem'>
        <img src= 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/356405245.jpg?k=507fd8e3bdd5834559a73dd6813f8f17eebf22d8586521f61fb5ba72973337c4&o=&hp=1'
        alt=''
        className='siImg'/>
        <div className='siDesc'>
            <h1 className='siTitle'>{items?.name} </h1>
            <span className='siDistance'>{items?.distance}</span>
            <span className='siTaxiOp'>Free Airport Taxi</span>
            <span className='siSubtitle'>Studio Appartments with Air Conditioning</span>
            <span className='siFeatures'>
                {items?.desc}
            </span>
            <span className='si CancelOp'>Free Cancellation </span>
            <span className='siClassNameOpSubTitle'> 
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='siDetails'>
            {items.rating && <div className='siRatting'>
                <>{items.rating >= 4 ? <span className=''> Exellent </span>:
                <span>
                    moderate
                    </span>}
                <button>{items.rating}</button>
                </> 
            </div>}
            <div className='siDetailsTaxes'>
                <span className='siPrice'>${items.cheapestPrice}</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <Link to={`/hotels/${items._id}`}>
                <button onClick={Hoteldetail} className='siCheckButton'>See avalability</button>
                </Link>
            </div>
        </div>
    

    </div>
  )
}

export default SearchItem