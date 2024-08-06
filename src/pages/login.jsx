import React from 'react'
import LoginForm from '../components/loginForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='container'>
        <section>
        <h2 className="text-center my-3 pb-4 border-bottom">
          <span className="text-success text-bolder fs-1 px-2">|</span>
          Login Account
        </h2>
        <LoginForm />
        <p className='text-center'>Not a member? <Link to={'/signup'}>Signup</Link></p>
        </section>
    </main>
  )
}

export default Login
