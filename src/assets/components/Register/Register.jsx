import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post(`${apiUrl}/auth/register`, data); // Removed the unused `response` variable
      toast.success("Successfully registered!", { autoClose: 5000 });
      reset();
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!", {
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='registerContainer'>
      <Link className='logo' to="/">
          <span className="logo">TheHotels.com</span>
      </Link>
      <h1 className='regTitle'>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='regInputs'>
          <input
            {...register('username', {
              required: "Enter your username",
              minLength: {
                value: 8,
                message: "Please enter at least 8 characters"
              },
              maxLength: {
                value: 15,
                message: "Please enter at most 15 characters"
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Please enter a valid username"
              }
            })}
            type='text'
            placeholder='Username'
            className="inputDesign"
          />
          <FaUser className="iconDisplay" />
        </div>
        {errors.username && <p className="error">{errors.username.message}</p>}

        <div className='regInputs'>
          <input
            {...register('email', {
              required: "Enter your email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address"
              }
            })}
            type='email'
            placeholder='Email'
            className="inputDesign"
          />
          <FaUser className="iconDisplay" />
        </div>
        {errors.email && <p className="error">{errors.email.message}</p>}

        <div className='regInputs'>
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
            type='password'
            placeholder='New Password'
            className="inputDesign"
          />
          <RiLockPasswordLine className="iconDisplay" />
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button disabled={loading} type="submit" className="registerButton">
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <div className="auth-login">
        <span className="auth-LoginDisplay">You have an account?</span>
        <Link className="loginLink" to='/login'>Sign In</Link>
      </div>
    </div>
  );
};

export default Register;
