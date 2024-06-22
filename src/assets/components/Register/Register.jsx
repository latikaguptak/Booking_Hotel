import { Link } from 'react-router-dom'
import './Register.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from 'react';

const initialValues = {
  username: "",
  email: "",
  password: "",
}

const Register = () => {
  const [formData, setFormData] = useState(initialValues);
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handelSubmit =(e) => {
    e.preventDefault();
    console.log("userdata", formData);
    try {
    // const response = await axios.post("",Data)
    // console.log(response.data);
    console.log(formData);
    setFormData(initialValues)
    }
    catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='registerContainer'>
      <h1 className='regTitle'> Register</h1>
      <form onSubmit={handelSubmit} >
        <div className='regInputs'>
          <input type='text' placeholder='UserName/Email-id' className="inputDesign" name='username' required onChange={handlerChange} value={formData.username}/>
          <FaUser className="iconDisplay"/>
        </div>
        <div className='regInputs'>
          <input type='mail' placeholder='Email-id' className="inputDesign" name='email' required onChange={handlerChange} value={formData.mail}/>
          <FaUser className="iconDisplay"/>
        </div>
        
        <div className='regInputs'>
          <input type='password' placeholder='New Password' className="inputDesign" name='password' required onChange={handlerChange} value={formData.password}/>
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