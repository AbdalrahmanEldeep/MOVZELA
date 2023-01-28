import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { SignOutUserPage } from "../../../firebase-init";
import { MainData } from "../context/Context";
import "./side.css";

export const Side = ({ status, setSlide }) => {
  let [act__index, setAct] = useState(0);
  let [list] = useState(["Home", "Popular", "Top rated", "Coming soon"]);
  let { change__base, change__page, set__act ,userData,userPhoto} = useContext(MainData);

  let active__func = (e) => {
    setAct(list.indexOf(e.target.innerText));
    set__act(e.target.innerText);
    switch (e.target.innerText) {
      case "Top rated":
        change__base("top_rated");
        document.title = "TOP - RATED";
        change__page(1);
        break;
      case "Home":
        change__base("now_playing");
        change__page(1);
        document.title = "MOVZILA";
        break;
      case "Coming soon":
        change__base("upcoming");
        change__page(1);
        document.title = "COMING - SOON";
        break;
      case "Popular":
        change__page(2);
        document.title = "POPULAR";
        break;
      default:
        change__page(0);
        document.title = "Home - Page";
    }
    setSlide(false);
  };


  const signOutUser = () => {
    SignOutUserPage();
  }

  return (
    <div className={!status ? "Slide" : "Slide active-slide"}>
      <ul>
        <li className="user-li">
          <div className="user-info d-flex-c">
              <div className="user-img">
                <img
                  style={{ borderRadius: "60px" }}
                  src={userPhoto ? userPhoto : "assets/user.png"}
                  width="60px"
                  height="60px"
                  alt="img"
                />
                <div className="user-name">{userData.email}</div>
              </div>
          </div>
        </li>
        {list.map((e, index) => {
          return (
            <li
              onClick={active__func}
              key={index}
              className={index === act__index ? "active-li" : null}
            >
              {e}
            </li>
          );
        })}
      </ul>
      <button onClick={signOutUser}>
        <img height={35} width={35} src="./assets/logout.png" alt="" />
      </button>
    </div>
  );
};
