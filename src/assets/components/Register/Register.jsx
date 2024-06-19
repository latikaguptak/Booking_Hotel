import { Link } from 'react-router-dom'
import './Register.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";


const Register = () => {
  return (
    <div className='registerContainer'>
      <h1 className='regTitle'> Register</h1>
      <form>
        <div className='regInputs'>
          <input type='text' placeholder='UserName/Email-id' className="inputDesign"/>
          <FaUser className="iconDisplay"/>
        </div>
        <div className='regInputs'>
          <input  min = {1} type='number' placeholder='Age' className="inputDesign"/>
        </div>
        <div className='regInputs'>
          <input type='password' placeholder='New Password' className="inputDesign"/>
          <RiLockPasswordLine className="iconDisplay"/>
    
        </div>
        <div className='regInputs'>
          <input type='password' placeholder='Confirm Password' className="inputDesign" />
          <RiLockPasswordLine className="iconDisplay"/>
    
        </div>
      </form>
      <button type="submit" className="registerButton">
        Register
      </button>
      <div className="auth-login">
        <span className="auth-LoginDisplay">You have an account </span><Link className="loginLink "to='/login'> Sign In </Link>
      </div>
    </div>
    
  )
}

export default Register