import './Hotel.css'
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { FaLocationDot } from "react-icons/fa6";
import MailList from './../../components/MailList/MailList';
import Footer from './../../components/Footer/Footer';
import { useState } from 'react';
import { GoX } from "react-icons/go";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Navigate } from 'react-router-dom';

const Hotel = () => {
  const [slideNumber, setSlideNumber]=useState(0);
  const [open, setOpen]=useState(false);
  const photos=[
    {
      src: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      src: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
       src: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
      src: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
     },
     {
      src: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      src: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  ]
  const handleOpen=(i)=>{
    setOpen(!open);
    setSlideNumber(i);
  }
 
  return (
    <div className='Hotel'>
        <Navbar/>
        <Header type='list'/>
        <div className='hotelContainer'>
          {open && <div className='hotelSlider'>
            <GoX onClick={()=>setOpen(false)} className='crossSlider'/>
            <MdKeyboardDoubleArrowRight />
            <div className='hotelSliderWrapper'>
              <img src={photos[slideNumber].src} alt="" className='hotelSliderImg'/>
              </div>
            <MdKeyboardDoubleArrowLeft />
          </div>}
          <div className='hotelWrapper'>
            <button className='bookNow'>Reserve or Book Now</button>
            <h1 className='hotelTitle'>Grand Hotel</h1>
            <div className='hotelAddress'>
            <FaLocationDot/>
              <span>Elton st. 125 Newyork</span>
            </div>
            <span className='hotelDistance'>
              Excellent Location  500m from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className='hotelImages'>
              {photos.map((photo,i)=>(
                <div key='' className='hotelImageWrapper'>
                  <img  onClick={()=>handleOpen(i)} className='hotelImage' src={photo.src} alt=''/>
                </div>
              ))}
              </div>
              <div className='hotelDetails'>
                <div className='hotelDetailstexts'>
                  <h1 className='hotelDetailTitle'>
                    Stay in the heart of krakow
                  </h1>
                  <p className='hotelDesc'>
                    Locate a 5 minutes walk from St. Florian's Gate in Krakow Tower street appartments has accomidation od Air condition and free wifi connection
                  </p>
                </div>
                <div className='hotelDetailsPrice'>
                  <h1>
                      Perfect for 9-night stay
                  </h1>
                  <span>
                      this property is Excellent get 9.8 rating
                  </span>
                  <h2>
                    <b>$1000</b> (9 nights) 
                  </h2>
                  <button>Reserve or Book Now</button>
                </div>
              </div>
          </div>
        
        <MailList/>
        <Footer/>
    </div>
    </div>
  )
}

export default Hotel