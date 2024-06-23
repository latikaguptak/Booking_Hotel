import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toast notifications
import { useForm } from 'react-hook-form';
import axios from "axios";

const Login = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate =useNavigate()
  console.log("api:", apiUrl);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, data);
      console.log(response.data);
      toast.success("Login Successful", {
        autoClose: 5000, // duration in milliseconds
        
      });
      reset();
      navigate('/')
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

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
            className="inputDesign"
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
            placeholder="Password"
            className="inputDesign"
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
        <button type="submit" className="loginButton">
          Login
        </button>
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
