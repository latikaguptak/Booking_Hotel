import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';



const Register = () => {
  const { register, handleSubmit, formState:{errors}, reset} =useForm()
  const navigate = useNavigate()
  const apiUrl = import.meta.env.VITE_API_URL
  const onSubmit = async(data) => {
    try{
      const response = await axios.post(`${apiUrl}/auth/register`,data);
      console.log('response', response.data);
      toast.success("Successfully registered !", {
        autoClose: 5000, 
      } );
      reset();
      navigate('/')
    }
    catch{
      toast.error("Something went wrong!", {
        autoClose: 5000, // duration in milliseconds
    } );
  }
    
};
    
  
  return (
    <div className='registerContainer'>
      <h1 className='regTitle'> Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='regInputs'>
          <input
          {...register('username', {
            required: "Enter your username",
            minLength: {
              value: 8,
              message: "Please enter at least 8 characters"
            },
            maxLength:{
              value: 15,
              message: "Please enter at most 15 characters"
            },
            pattern: /^[a-zA-Z0-9]+$/,
            message: "Please enter a valid username"
          })}
           type='text'
           placeholder='username'
           className="inputDesign" 
           />
          <FaUser
           className="iconDisplay"
           />
        </div>
        {
          errors.username && (
            <p className="error">{errors.username.message}</p>
          )
        }
        <div className='regInputs'>
          <input 
          {...register('email', {
            required: "Enter your email",
            validate: (value) =>
              {
                if(!value.includes("@")) {
                  return "Username includes @" 
                }

                return true
              }
            })
          }
          type='mail' 
          placeholder='email' className="inputDesign"
          />
          <FaUser className="iconDisplay"/>
        </div>
        {
          errors.email && (
            <p className="error">{errors.email.message}</p>
          )
        }
        
        <div className='regInputs'>
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
          type='password' 
          placeholder='New Password' className="inputDesign" 
            />
          <RiLockPasswordLine className="iconDisplay"/>
    
        </div>
        {
          errors.password && (
            <p className="error">{errors.password.message}</p>
          )
        }
      <button type="submit" className="registerButton">
        Register
      </button>
        
      </form>
     
      <div className="auth-login">
        <span className="auth-LoginDisplay">You have an account </span><Link className="loginLink "to='/login'> Sign In </Link>
      </div>
    </div>
    
  )
}

export default Register