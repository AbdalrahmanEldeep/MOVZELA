import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, SignInUser } from '../../../firebase-init';
import "./LoginPage.css";

export default function LoginPage() {


  const SignInExistUser = async (e) => {
    e.preventDefault();
    const [email,password] = e.target;
    SignInUser(auth,email.value,password.value).then((e) => {
      if(e === "auth/user-not-found"){
        toast.warn("This User Not Exist Please Sign in !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    })
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
