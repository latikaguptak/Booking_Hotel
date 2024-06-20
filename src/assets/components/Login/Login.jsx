import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";

const Login = () => {
  const handelSubmit = async(e) => {
    e.preventDefault();
    console.log("userdata", formData);
    try {
    const response = await axios.post("",Data)
    console.log(response.data);
    setFormData(initialValue)
    }
    catch (error) {
      console.log(error);
    }

  }
  const handlerChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="login">
      <h2 className="Title">Login</h2>
      <form onSubmit={handelSubmit}> 
      <div className="loginInputs">
        <input type="text" placeholder="Username" className="inputDesign" onChange={handlerChange} required />
        <FaUser className="iconDisplay"/>
      </div>
      <div className="loginInputs">
        <input type="password" placeholder="Password" className="inputDesign" onChange={handlerChange} required/>
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
