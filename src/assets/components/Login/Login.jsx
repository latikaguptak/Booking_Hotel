import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h2 className="Title">Login</h2>
      <form> 
      <div className="loginInputs">
        <input type="text" placeholder="Username" className="inputDesign" />
        <FaUser className="iconDisplay"/>
      </div>
      <div className="loginInputs">
        <input type="password" placeholder="Password" className="inputDesign" />
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
        <span className="auth-RegisterDisplay">Don't have an account yet?</span><Link to='/Register'> Sign Up </Link>
      </div>
      
    </div>
  );
};

export default Login;
