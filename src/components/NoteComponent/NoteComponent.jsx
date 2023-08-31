import React, { useState } from "react";

const NoteComponent = ({ categoryName, setSelectedNote, setIsClicked }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const notes = [
    {
      title: "Title 1",
      description: "Description for note 1...",
    },
    {
      title: "Title 2",
      description: "Description for note 2...",
    },
    {
      title: "Title 3",
      description: "Description for note 3...",
    },
  ];

  const handleSelectedNote = (note) => {
    setSelectedNote(note);
    setIsClicked(true);
  };

  return (
    <div
      className="mt-1 me-2 p-2"
      style={{
        height: "899px",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 1px 4px 0px #00000029",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <div className="d-flex align-items-center">
        <button
          className="btn text-white d-flex align-items-center justify-content-between"
          style={{
            backgroundColor: "#71CF48",
            width: "200px",
            height: "32px",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <span className="flex-grow-1 text-center">Create Note</span>

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

        <div
          style={{
            position: "relative",
            width: "250px",
            height: "32px",
            backgroundColor: "#EAEAEA",
            borderRadius: "1px",
          }}
          className="ms-2"
        >
          {searchInputValue === "" && (
            <i
              className="bi bi-search"
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#D0D0D0",
                pointerEvents: "none", // Makes the icon non-interactive
              }}
            ></i>
          )}

          <label
            htmlFor="search-input"
            style={{
              position: "absolute",
              left: "40px", // You can adjust this as needed
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#D0D0D0",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Search...
          </label>

          <input
            id="search-input"
            type="search"
            onChange={(e) => setSearchInputValue(e.target.value)}
            className="ms-2"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
            onFocus={() => {
              document.querySelector(
                'label[for="search-input"]'
              ).style.display = "none";
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                document.querySelector(
                  'label[for="search-input"]'
                ).style.display = "";
              }
            }}
          />
        </div>
      </div>

      {notes.map((note, index) => (
        <div
          key={index}
          className="mt-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleSelectedNote(note)}
        >
          <span>{note.title}</span>
          <p>{note.description}</p>
          <hr
            className="my-3 "
            style={{
              color: "#EFEFEF",
              width: "100%",
              borderWidth: "1px",
              borderColor: "grey",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default NoteComponent;
