import React from "react";

const CategoryItem = ({ name }) => {
  return (
    <div
      className="mt-2 text-white d-flex align-items-center justify-content-around"
      style={{
        width: "350px",
        height: "42px",
        borderRadius: "5px",
        backgroundColor: "#1264A3",
      }}
    >
      <div className="flex-grow-1 ">
        <i className="bi bi-folder-fill ms-2 fs-4"></i>
        <span className="ms-2">{name}</span>
      </div>
      <i className="bi bi-caret-down-fill me-2"></i>
    </div>
  );
};

export default CategoryItem;
