import React from 'react'
import SignUpForm from '../components/signUpForm'
import LoginForm from '../components/loginForm'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <main className='container'>
        <section>
        <h2 className="text-center my-3 pb-4 border-bottom">
          <span className="text-success text-bolder fs-1 px-2">|</span>
          Create  Account
        </h2>
        <SignUpForm />
        <p className='text-center'>Already a member? <Link to={'/login'}>Login</Link></p>
        </section>
    </main>
  )
}

export default SignUp
