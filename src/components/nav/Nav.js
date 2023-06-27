import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SignOutUserPage } from "../../../firebase-init";
import { MainData } from "../context/Context";
import "./nav.css";
import { ClipLoader } from "react-spinners";

export const Nav = ({ status, hidder, slide__status }) => {
  let [inp__class, setInp] = useState(false);
  let { search__inp, userData } = useContext(MainData);

  function controller() {
    !inp__class ? setInp(true) : setInp(false);
  }

  function slide__controller() {
    status();
  }

  function search(e) {
    search__inp(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  }
  return (
    <div className="nav-container d-flex-r">
      <div className="logo-search-inp d-flex-r">
        <div className="logo-img">
          <img
            src="../../../assets/Logo.svg"
            width="80px"
            height="80px"
            alt="img"
          />
        </div>
        {hidder ? (
          <>
            <div
              className={
                !inp__class
                  ? "inp-search d-flex-r"
                  : "inp-search inp-search-active d-flex-r"
              }
            >
              <form>
                <img
                  src="./assets/search-outline.svg"
                  className="search-icon"
                  width="30px"
                  height="30px"
                  alt="img"
                />
                <input
                  onChange={search}
                  type="text"
                  placeholder="search movies..."
                />
              </form>
            </div>
          </>
        ) : null}
      </div>
      {hidder ? (
        <>
          <div className="user-info d-flex-c">
            <div className="user-img">
              {!userData.photoURL && <ClipLoader color={"#849b87"} />}
              {userData.photoURL && (
                <img
                  loading="lazy"
                  style={{ borderRadius: "60px", backgroundColor: "#fff" }}
                  src={userData.photoURL}
                  width="60px"
                  height="60px"
                  alt="img"
                />
              )}
              <div className="user-name">{userData.email}</div>
            </div>
          </div>
          <div className="toggle-search">
            <button onClick={() => SignOutUserPage()}>
              <img height={35} width={35} src="./assets/logout.png" alt="" />
            </button>
            <img
              src="./assets/search-outline.svg"
              onClick={controller}
              width="30px"
              height="30px"
              alt="img"
            />
            <span
              style={{ marginLeft: "30px", cursor: "pointer" }}
              onClick={slide__controller}
              className="toggle"
            >
              {!slide__status ? (
                <img
                  src="./assets/List.png"
                  width="30px"
                  height="30px"
                  alt="img"
                />
              ) : (
                <img
                  src="./assets/close.png"
                  width="30px"
                  height="30px"
                  alt="img"
                />
              )}
            </span>
          </div>
        </>
      ) : (
        <Link to="/" className="back-home">
          Home
        </Link>
      )}
    </div>
  );
};
