/* eslint-disable react/prop-types */
import './Auth.css';
import hotelgirl from '../../../../public/hotel-girl.png';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import { useState } from 'react';

const Auth = ({ authType }) => {
  // Determine if it's a login or register view
  const isLogin = authType === true || authType === 'true';

  // State to handle loading indicator
  const [isLoading, setIsLoading] = useState(false);

  // Render the appropriate form based on the authType prop
  const renderForm = () => {
    if (isLogin) {
      return <Login setIsLoading={setIsLoading} />;
    }
    return <Register setIsLoading={setIsLoading} />;
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <div className='form-ContainerDisplay'>
          {isLoading ? (
            <div className="loading-spinner">Loading...</div> // Placeholder for spinner
          ) : (
            renderForm()
          )}
        </div>
      </div>
      <div className="side-image">
        <img src={hotelgirl} alt='A welcoming receptionist at a hotel' loading="lazy" />
      </div>
    </div>
  );
}

export default Auth;
