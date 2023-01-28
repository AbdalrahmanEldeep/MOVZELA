import React from 'react'
import { Link } from 'react-router-dom';
import { auth, SignInUser } from '../../../firebase-init';
import "./LoginPage.css";

export default function LoginPage() {


  const SignInExistUser = (e) => {
    e.preventDefault();
    const [email,password] = e.target;
    SignInUser(auth,email.value,password.value);
  }

  return(
  <div className="form-container">
    <form onSubmit={SignInExistUser}>
      <div className="logo">
        <img src="./assets/Logo.png" alt="" />
        <p>MO<strong>V</strong>ZEL<strong>A</strong></p>
      </div>
      <input type="email" placeholder="Enter Your Email" />
      <input type="password" placeholder="Enter Your Password" />
      <button>Login</button>
      <p className="singin-link">
        <Link to="/signin"><span>Create account</span></Link>
      </p>
    </form>
  </div>
  )
}
