import './Auth.css'
import hotelgirl from '../../../../public/hotel-girl.png'


const Auth = () => {
  return (
    <div className="auth-container">
            <div className="form-container">
                <form className='form-ContainerDispaly'>
                    <h2>Login</h2>
                    <div>
                        <label>Username:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="side-image">
                <img src={hotelgirl} alt='' />
            </div>
            </div>
  )
}

export default Auth