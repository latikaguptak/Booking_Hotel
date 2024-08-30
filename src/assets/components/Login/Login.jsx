import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext); // Added user state to check login status
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, data);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      toast.success("Login Successful", { autoClose: 5000 });
      reset();
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong', { autoClose: 5000 });
      dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data });
    }
  };

  // Redirect user if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="login">
      <h2 className="Title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginInputs">
          <input
            {...register('username', {
              required: 'Username is required',
            })}
            type="text"
            placeholder="Username"
            className="inputDesign"
          />
          
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
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <span className="error">Login failed: {error.message}</span>}
      </form>
      <div className="auth-Register">
        <span className="auth-RegisterDisplay">Do not have an account yet?</span>
        <Link className="RegisterLink" to="/Register">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
