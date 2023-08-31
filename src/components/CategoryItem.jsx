import React from "react";

const CategoryItem = ({ name, isExpanded, toggleExpand }) => {
  return (
    <div
      className="mt-2 text-white d-flex align-items-center justify-content-around"
      style={{
        width: "350px",
        height: "42px",
        borderRadius: "5px",
        backgroundColor: isExpanded ? "#F8F8FA" : "#1264A3",
        cursor: "pointer",
      }}
      onClick={toggleExpand}
    >
      <div className="flex-grow-1 ">
        <i
          className={`bi bi-folder-${
            isExpanded ? "fill text-dark" : "fill text-white"
          } ms-2 fs-4`}
          style={{ backgroundColor: isExpanded ? "white" : "" }}
        ></i>

        <span
          className="ms-2"
          style={{ color: isExpanded ? "black" : "white" }}
        >
          {name}
        </span>
      </div>

      {!isExpanded ? (
        <i className="bi bi-caret-down-fill me-2"></i>
      ) : (
        <i
          className="bi bi-caret-right-fill me-2"
          style={{ color: "black" }}
        ></i>
      )}
    </div>
  );
};

export default CategoryItem;
