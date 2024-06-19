import './Auth.css'
import hotelgirl from '../../../../public/hotel-girl.png'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'



const Auth = ({type}) => {
  

  return (
    <div className="auth-container">
            <div className="form-container">
                <div className='form-ContainerDispaly'>
                    {type==='true' ? <Login />:<Register/>}
                </div>
                

            </div>
            <div className="side-image">
                <img src={hotelgirl} alt='' />
            </div>
            </div>
  )
}

export default Auth