import './MailList.css';

const MailList = () => {
  return (
    <div className='mailList'>
      <h1 className='mailList__title'>Save Time, Save Money</h1>
      <span className='mailList__description'>Sign up to receive our latest deals</span>
      <div className='mailList__inputContainer'>
        <input className='mailList__input' type='email' placeholder='Enter your email' />
        <button className='mailList__button'>Subscribe</button>
      </div>
      <div className='mailList__footer'>
        <div className='mailList__footerLists'>
          {Array.from({ length: 4 }).map((_, index) => (
            <ul key={index} className='mailList__footerList'>
              <li className='mailList__footerListItem'>Countries</li>
              <li className='mailList__footerListItem'>Regions</li>
              <li className='mailList__footerListItem'>Cities</li>
              <li className='mailList__footerListItem'>Districts</li>
              <li className='mailList__footerListItem'>Hotels</li>
            </ul>
          ))}
        </div>
        <span className='mailList__footerText'>© 2024 TheHotels.com</span>
      </div>
    </div>
  );
}

export default MailList;
