import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";
import { useState } from "react";
import {useForm} from 'react-hook-form';

const initialValue = {
  username: "",
  password: "",
};

const Login = () => {
  const { register, handleSubmit, formState:{errors},} = useForm ()
  const [formData, setFormData] = useState(initialValue);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", formData);
  //   // Perform further actions like API call or validation here
  //   setFormData(initialValue); // Reset form after submission
  // };
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="login">
      <h2 className="Title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}> {/* Form element starts here */}
        <div className="loginInputs">
          <input
            { ...register('username', {
              required: 'Username is required',
              validate: (value) =>
                {
                  if(!value.includes("@")) {
                    return "Username includes @" 
                  }

                  return true
                },
              }
            )}

            type="text"
            placeholder="Username"
            className="inputDesign"
        
          />
          <FaUser className="iconDisplay" />
        </div>
        {
          errors.username && (
            <p className="error">{errors.username.message}</p>
          )
        }
        <div className="loginInputs">
          <input
          {...register('password',{
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
        
          {
            errors.password && (
              <p className="error">{errors.password.message}</p>
            )
          }
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
