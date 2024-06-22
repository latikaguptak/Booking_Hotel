import './Auth.css'
import hotelgirl from '../../../../public/hotel-girl.png'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'



const Auth = ({authType}) => {
  

  return (
    <div className="auth-container">
            <div className="form-container">
                <div className='form-ContainerDispaly'>
                    {authType==='true' ? <Login />:<Register/>}
                </div>
                

            </div>
            <div className="side-image">
                <img src={hotelgirl} alt='' />
            </div>
            </div>
  )
}

export default Auth