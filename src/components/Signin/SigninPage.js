import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import { auth, createNewUsers } from "../../../firebase-init";
import "./SigninPage.css";

export default function SigninPage() {
  const [loaderState, setLoaderState] = useState(false);
  const fileInputRef = useRef();
  const [userPreviewImage, setUserPreviewImage] = useState("");

  const navigator = useNavigate();

  const message = (mess) => {
    toast.warn(mess, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUserPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const appendNewUser = (e) => {
    e.preventDefault();
    const [input_1, input_2, input_3, input_4, input_5] = e.target;
    const regexEmailPattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (input_1.value === "") {
      message("Please enter your name not less than 5 characters");
    } else if (input_2.value === "" || !regexEmailPattern.test(input_2.value)) {
      message("Please enter valid email @example.com");
    } else if (input_3.value === "" || input_4.value === "") {
      message("Please enter your password not less than 8 characters");
    } else if (input_3.value.length < 8 || input_4.value.length < 8) {
      message("Please enter your password not less than 8 characters ");
    } else if (input_3.value !== input_4.value) {
      message("Check your password confirmation");
    } else if (input_5.value === "") {
      message("Please upload your amazing photo");
    } else {
      setLoaderState(true);
      createNewUsers(
        auth,
        input_2.value,
        input_3.value,
        fileInputRef.current.files[0]
      ).then((e) => {
        if (e === "auth/email-already-in-use") {
          message("This User already exists!");
          input_1.value = "";
          input_2.value = "";
          input_3.value = "";
          input_4.value = "";
          input_5.value = "";
          setLoaderState(false);
        }
        navigator("/");
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={appendNewUser}>
        <div style={{ display: loaderState ? "block" : "none" }}>
          <PropagateLoader
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        </div>
        <div className="logo">
          <img src="./assets/Logo.png" alt="" />
          <p>
            MO<strong>V</strong>ZEL<strong>A</strong>
          </p>
        </div>
        <input type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <input type="password" placeholder="Confirm Password" />
        <label htmlFor="file">
          {!userPreviewImage && (
            <img width={40} height={40} src="./assets/upload.png" alt="" />
          )}
          {userPreviewImage && (
            <img
              title="user-preview-image"
              src={userPreviewImage}
              style={{
                maxWidth: "60px",
                borderRadius: "50%",
              }}
            />
          )}
        </label>
        <input
          onChange={handleUpload}
          accept="image/*"
          type="file"
          id="file"
          ref={fileInputRef}
          hidden
        />
        <button>Sign in</button>
        <p className="singin-link">
          <Link to="/">
            <span> Have an account ?</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
