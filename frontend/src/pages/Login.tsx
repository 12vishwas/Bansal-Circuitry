import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./login.css"

interface LoginFormInputs{
  name: string;
  email: string;
  password: string;
}

const Login:React.FC = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm<LoginFormInputs>();

  const onSubmit = (data:LoginFormInputs) => {
    console.log('Login data:', data)
  };


  return(
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
          id="email"
          type="text"
          {...register('email', {required: 'email is required'})}
          />
          {errors.email && <p className='error'>{errors.email.message}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
          id="password"
          type="password"
          {...register('password', {required: 'password is required'})}
          />
          {errors.password && <p className='error'>{errors.password.message}</p>}
        </div>

        <p>Don't have an account?<Link to="/register">Register</Link></p>

        <button type='submit'>Login</button>
      </form>

    </div>
  )
}

export default Login;