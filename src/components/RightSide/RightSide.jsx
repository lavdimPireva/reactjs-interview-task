import React, { useState } from "react";
import { useCategoryContext } from "../../context/CategoryContext";

const RightSide = () => {
  const [notes, setNotes] = useState({});
  const { selectedCategory } = useCategoryContext();

  console.log("selectedCategory", selectedCategory);

  const handleSubmit = (e) => {};

  return (
    <div
      className="mt-2  "
      style={{
        maxWidth: "1300px",
        height: "899px",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",

        boxShadow: "0px 1px 4px 0px #00000029",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex ms-2">
          <div
            className="mt-2 ms-2"
            style={{
              width: "120px",
              height: "32px",
              borderRadius: "5px",
              backgroundColor: "#1264A3",
            }}
          ></div>
          <div
            className="mt-2 ms-2"
            style={{
              width: "120px",
              height: "32px",
              borderRadius: "5px",
              backgroundColor: "#1264A3",
            }}
          ></div>
          <div
            className="mt-2 ms-2"
            style={{
              width: "120px",
              height: "32px",
              borderRadius: "5px",
              backgroundColor: "#71CF48",
            }}
          ></div>
        </div>

        <div className="d-flex me-3">
          <div
            className="mt-2 me-2"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "5px",
              backgroundColor: "#1264A3 ",
            }}
          ></div>
          <div
            className="mt-2 me-2"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "5px",
              backgroundColor: "#1264A3 ",
            }}
          ></div>
          <div
            className="mt-2"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "5px",
              backgroundColor: "#1264A3 ",
            }}
          ></div>
        </div>
      </div>

      <form method="post" onSubmit={handleSubmit}>
        <input
          name="title"
          className="mt-3 ms-3 border-0 fw-light "
          style={{ outline: "none" }}
          type="text"
          placeholder="Add a title"
        />

        <hr
          className="my-3 ms-2"
          style={{
            color: "#EFEFEF",
            width: "1250px",
            borderWidth: "1px",
            borderColor: "grey",
          }}
        />

        <textarea
          name="noteDescription"
          className=" ms-3 border-0"
          rows={30}
          cols={100}
          placeholder="Write your note here..."
          style={{ outline: "none", resize: "none" }}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Write your note here...")}
        ></textarea>

        <button
          type="submit"
          className="btn text-white d-flex align-items-center justify-content-between"
          style={{
            backgroundColor: "#71CF48",
            width: "150px",
            height: "32px",
            borderRadius: "5px",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          <span className="flex-grow-1 text-center">Save Changes</span>

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
            <i class="bi bi-check2" style={{ fontSize: "24px" }}></i>
          </div>
        </button>
      </form>
    </div>
  );
};

export default RightSide;
