import './Hotel.css';
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { FaLocationDot } from "react-icons/fa6";
import MailList from './../../components/MailList/MailList';
import Footer from './../../components/Footer/Footer';
import { useContext, useState } from 'react';
import { GoX } from "react-icons/go";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import useFetch from './../../hooks/useFetch';
import { SearchContext } from '../../../context/SearchContext';

const Hotel = () => {
  const location = useLocation();
  // console.log("location", location)
  const id = location.pathname.split("/")[2];
  // console.log('id', id);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useFetch(`hotels/find/${id}`);
  const{dates, options} = useContext(SearchContext)
  // console.log('dates', dates);

  const handleOpen = (i) => {
    setOpen(true);
    setSlideNumber(i);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  const MILLISECONDS = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());
    const daysDifference = Math.ceil(timeDifference / MILLISECONDS);
    return daysDifference;

  }
  const days=dayDifference(dates[0].startDate, dates[0].endDate);
  return (
    <div className='Hotel'>
      <Navbar />
      <Header type='list' />
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='hotelContainer'>
          {open && (
            <div className='hotelSlider'>
              <GoX onClick={() => setOpen(false)} className='crossSlider' />
              <MdKeyboardDoubleArrowLeft className='arrow' onClick={() => handleMove("left")} />
              <div className='hotelSliderWrapper'>
                <img src={data?.photos[slideNumber]} alt="" className='hotelSliderImg' />
              </div>
              <MdKeyboardDoubleArrowRight className='arrow' onClick={() => handleMove("right")} />
            </div>
          )}
          <div className='hotelWrapper'>
            <button className='bookNow'>Reserve or Book Now</button>
            <h1 className='hotelTitle'>{data?.name}</h1>
            <div className='hotelAddress'>
              <FaLocationDot />
              <span>{data?.address} </span>
            </div>
            <span className='hotelDistance'>
              Excellent Location {data?.distance}m from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over ${data?.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className='hotelImages'>
              {data.photos?.map((photo, i) => (
                <div key={i} className='hotelImageWrapper'>
                  <img onClick={() => handleOpen(i)} className='hotelImage' src={photo} alt='' />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailstexts'>
                <h1 className='hotelDetailTitle'>
                  {data?.title}
                </h1>
                <p className='hotelDesc'>
                  {data?.desc}
                </p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>
                  Perfect for a {days} days stay!
                </h1>
                <span>
                  This property has an excellent rating of 9.8!
                </span>
                <h2>
                  <b>${days*data.cheapestPrice } /room </b>  <span>for {days} days </span>
                </h2>
                <button>Reserve or Book Now</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
     
    </div>
  );
}

export default Hotel;
