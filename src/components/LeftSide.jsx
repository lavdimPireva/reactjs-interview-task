import React from "react";
import CategoryItem from "./CategoryItem";
import { useCategoryContext } from "../context/CategoryContext";
import { useState } from "react";

const LeftSide = ({ setIsClicked }) => {
  const categories = Array(20)
    .fill()
    .map((_, idx) => `Category (${idx})`);

  const [expandedCategory, setExpandedCategory] = useState(null);
  const { setSelectedCategory } = useCategoryContext();

  const handleCategoryClick = (categoryName) => {
    if (categoryName === expandedCategory) {
      setExpandedCategory(null);
      setSelectedCategory(null);
      setIsClicked(false);
    } else {
      setExpandedCategory(categoryName);
      setSelectedCategory(categoryName);
    }
  };

  return (
    <div
      className="m-2 p-1"
      style={{
        width: "370px",
        maxHeight: "899px",
        overflow: "auto",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 1px 4px 0px #00000029",
        flexShrink: 0,
      }}
    >
      <button
        className="btn text-white d-flex align-items-center justify-content-between"
        style={{
          backgroundColor: "#71CF48",
          width: "350px",
          height: "32px",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <span className="flex-grow-1 text-center">Create Category</span>

        <div className="d-flex align-items-center">
          <span
            style={{
              height: "30px",
              width: "2px",
              backgroundColor: "#68C142",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          ></span>
          <i className="bi bi-plus" style={{ fontSize: "30px" }}></i>
        </div>
      </button>

      {categories.map((category) => (
        <CategoryItem
          key={category}
          name={category}
          isExpanded={category === expandedCategory}
          toggleExpand={() => handleCategoryClick(category)}
        />
      ))}
    </div>
  );
};

export default LeftSide;
