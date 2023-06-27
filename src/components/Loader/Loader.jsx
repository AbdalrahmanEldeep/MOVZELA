import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <>
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="loader-header">
        <strong>Load</strong>{" "}
        <strong style={{ color: "var(--active-color)" }}>Move...</strong>{" "}
      </h1>
    </>
  );
};
