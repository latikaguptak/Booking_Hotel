import './Hotel.css';
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { FaLocationDot } from "react-icons/fa6";
import MailList from './../../components/MailList/MailList';

import { useContext, useState } from 'react';
import { GoX } from "react-icons/go";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from './../../hooks/useFetch';
import { SearchContext } from '../../../context/SearchContext';
import { AuthContext } from '../../../context/AuthContext';
import Reserve from './../../components/reserve/Reserve';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { data, loading, error } = useFetch(`hotels/find/${id}`);
  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpenSlider = (index) => {
    setOpenSlider(true);
    setSlideNumber(index);
  };

  const handleSlideChange = (direction) => {
    const totalPhotos = data.photos.length;
    setSlideNumber((prev) => 
      direction === "left" 
        ? (prev === 0 ? totalPhotos - 1 : prev - 1) 
        : (prev === totalPhotos - 1 ? 0 : prev + 1)
    );
  };

  const calculateDaysDifference = (date1, date2) => {
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    return Math.ceil(Math.abs(date2?.getTime() - date1?.getTime()) / MILLISECONDS_PER_DAY);
  };

  const days = dates[0] ? calculateDaysDifference(dates[0].startDate, dates[0].endDate) : 1;

  const handleReserveClick = () => {
    if (user) {
      setOpenModel(true);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='hotel'>
      <Navbar />
      <Header type='list' />
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='hotelContainer'>
          {openSlider && (
            <div className='hotelSlider'>
              <GoX onClick={() => setOpenSlider(false)} className='closeSlider' />
              <MdKeyboardDoubleArrowLeft className='arrow' onClick={() => handleSlideChange("left")} />
              <div className='hotelSliderWrapper'>
                <img src={data?.photos[slideNumber]} alt="" className='hotelSliderImg' />
              </div>
              <MdKeyboardDoubleArrowRight className='arrow' onClick={() => handleSlideChange("right")} />
            </div>
          )}
          <div className='hotelWrapper'>
            <button onClick={handleReserveClick} className='bookNow'>Reserve or Book Now</button>
            <h1 className='hotelTitle'>{data?.name}</h1>
            <div className='hotelAddress'>
              <FaLocationDot />
              <span>{data?.address}</span>
            </div>
            <span className='hotelDistance'>
              Excellent location – {data?.distance}m from the center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over ${data?.cheapestPrice} at this property and get a free airport taxi!
            </span>
            <div className='hotelImages'>
              {data.photos?.map((photo, i) => (
                <div key={i} className='hotelImageWrapper'>
                  <img onClick={() => handleOpenSlider(i)} className='hotelImage' src={photo} alt='' />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailTexts'>
                <h1 className='hotelDetailTitle'>{data?.title}</h1>
                <p className='hotelDesc'>{data?.desc}</p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>Perfect for a {days}-night stay!</h1>
                <span>Top rated – 9.8 (Excellent)!</span>
                <h2>
                  <b>${days * data?.cheapestPrice}</b> ({days} nights)
                </h2>
                <button onClick={handleReserveClick}>Reserve or Book Now</button>
              </div>
            </div>
          </div>
          <MailList />
        
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id}/>}
    </div>
  );
}

export default Hotel;
