import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <>
      <div class="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="base">
          <span></span>
          <div class="face"></div>
        </div>
      </div>
      <div class="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="loader-header"><strong>Load</strong> <strong style={{color:"var(--active-color)"}}>Movies...</strong> </h1>
    </>
  );
};
