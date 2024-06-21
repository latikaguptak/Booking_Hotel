import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";
import { useState } from "react";
const initialValue = {
  Username: "",
  Password: "",
  
};

const Login = () => {
  const [formData, setFormData] = useState(initialValue);
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
    setFormData(initialValue)
    }
    catch (error) {
      console.log(error);
    }

  }
  
  return (
    <div className="login">
      <h2 className="Title">Login</h2>
      <form onSubmit={handelSubmit}> 
      <div className="loginInputs">
        <input type="text" placeholder="Username" className="inputDesign" onChange={handlerChange} required value={formData.Username}/>
        <FaUser className="iconDisplay"/>
      </div>
      <div className="loginInputs">
        <input type="password" placeholder="Password" className="inputDesign" onChange={handlerChange} required  value={formData.Password}/>
        <RiLockPasswordLine className="iconDisplay"/>
      </div>
      </form>
      <div className="loginReFor">
        <span className="loginRemember"><input type='checkbox'/> Remember me</span>
        <Link to='/' className="loginForgotPassword">Forgot Password?</Link>

      </div>
      <button type="submit" className="loginButton">
        Login
      </button>
      <div className="auth-Register">
        <span className="auth-RegisterDisplay">Don't have an account yet?</span><Link className="RegisterLink "to='/Register'> Sign Up </Link>
      </div>
      
    </div>
  );
};

export default Login;
