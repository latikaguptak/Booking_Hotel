import './Auth.css'
import hotelgirl from '../../../../public/hotel-girl.png'
import Login from '../../components/Login/Login'


const Auth = () => {
  return (
    <div className="auth-container">
            <div className="form-container">
                <div className='form-ContainerDispaly'>
                    <Login />

                </div>
                

            </div>
            <div className="side-image">
                <img src={hotelgirl} alt='' />
            </div>
            </div>
  )
}

export default Auth