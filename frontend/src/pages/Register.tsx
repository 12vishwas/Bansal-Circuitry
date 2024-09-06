import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import './login.css'
import Login from './Login';

interface RegisterInputs{
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}

const Register:React.FC = () =>{
  const {register, handleSubmit, formState: { errors }} = useForm<RegisterInputs>();
  const navigate = useNavigate();
  
  
  const onSubmit = (data:RegisterInputs) => {
    alert("registration successful")
    
    setTimeout (() => {
      navigate('/login')
    },1000)

  }

  return(
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='username' >Username</label>
          <input
          id = 'username'
          type = 'text'
          {...register ('username', {required : 'username is required'})}
          />
          {errors.username && <p className='error'>{errors.username.message}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input 
          id = 'email'
          type = 'email'
          {...register ('email', {required: 'email is required'})}
          />
          {errors.email && <p className='error'>{errors.email.message}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
          id = 'password'
          type = 'password'
          {...register ('password', {required: 'password is required'})}
          />
          {errors.password && <p className='error'>{errors.password.message}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input 
          id = 'confirmPassword'
          type = 'password'
          {...register ('confirmPassword', {
            required: 'please confirm your password',
            validate: (value, { password }) => value === password || "Password do not match"
          })}
          />
          {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
          </div>

        <p >Already have an account?<Link to='/login'>Login</Link></p>


        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register;