import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toast notifications
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
  const {user, loading, error, dispatch}= useContext(AuthContext);
  const [credentials, setCredentials] = useState({

    username: 'undefined',
    password: 'undefined',
  
  })
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate =useNavigate()
  // console.log("api:", apiUrl);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const handleChange = (e)=>{
    setCredentials({...credentials, [e.target.id]: e.target.value })
  }
  const onSubmit = async (data, e) => {
    // console.log(data);
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, data);
      // console.log(response.data);
      
      dispatch({type:"LOGIN_SUCCESS", payload: response.data});
      toast.success("Login Successful", {
        autoClose: 5000, // duration in milliseconds
        
      });
      reset();
      navigate('/')
    } catch (error) {
      toast.error('Something went wrong');
      dispatch({type:"LOGIN_FAILURE", payload:error.response.data});
    }
  };
  console.log(user)  
  
  return (
    <div className="login">
      <h2 className="Title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}> {/* Form element starts here */}
        <div className="loginInputs">
          <input
            {...register('username', {
              required: 'Username is required',
            })}
            type="text"
            placeholder="Username"
            className="inputDesign" id="username"
            onChange={handleChange}

          />
          <FaUser className="iconDisplay" />
        </div>
        {errors.username && <p className="error">{errors.username.message}</p>}

        <div className="loginInputs">
          <input
            {...register('password', {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 12,
                message: "Password must be at most 12 characters",
              },
            })}
            type="password"
            placeholder="Password" id = "password"
            className="inputDesign"
            onChange={handleChange}
          />
          <RiLockPasswordLine className="iconDisplay" />
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}

        <div className="loginReFor">
          <span className="loginRemember">
            <input type="checkbox" /> Remember me
          </span>
          <Link to="/" className="loginForgotPassword">
            Forgot Password?
          </Link>
        </div>
        <button disabled={loading} type="submit" className="loginButton">
          Login
        </button>
        {error && <span>error...</span>}
      </form> {/* Form element ends here */}
      <div className="auth-Register">
        <span className="auth-RegisterDisplay">
          Do not have an account yet?
        </span>
        <Link className="RegisterLink" to="/Register">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
