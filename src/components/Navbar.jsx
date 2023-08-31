import React from "react";

const Navbar = () => {
  return (
    <nav
      className="text-white d-flex align-items-center justify-content-between"
      style={{ backgroundColor: "#1F2A44", height: "50px", maxWidth: "1920px" }}
    >
      <div className="container d-flex justify-content-start">
        <span
          className="ms-3"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "22px",
            color: "#FFFFFF",
            fontFamily: "Open Sans",
          }}
        >
          Your Notes
        </span>
      </div>
      <i
        className="bi bi-x-lg text-white me-3"
        style={{
          width: "17px",
          height: "15.25px",
          color: "#FFFFFF",
        }}
      ></i>
    </nav>
  );
};

export default Navbar;
