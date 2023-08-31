import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

const NoteComponent = ({ categoryName, setSelectedNote, setIsClicked }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (searchInputValue) {
      const filtered = notes.filter((note) => {
        const titleMatches = note.title
          .toLowerCase()
          .includes(searchInputValue.toLowerCase());
        const descriptionMatches = note.description
          .toLowerCase()
          .includes(searchInputValue.toLowerCase());

        return titleMatches || descriptionMatches;
      });
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes);
    }
  }, [searchInputValue, notes]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedNotes = JSON.parse(localStorage.getItem("notes")) || {};
      setNotes(storedNotes[categoryName] || []);
    };

    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [categoryName]);

  const handleSelectedNote = (note, index) => {
    setSelectedNote(note);
    setSelectedNoteIndex(index);
    setIsClicked(true);
  };
  // #EFF4FF

  return (
    <div
      className="m-2 me-2 p-2"
      style={{
        height: "899px",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        overflow: "auto",
        boxShadow: "0px 1px 4px 0px #00000029",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <div className="d-flex align-items-center">
        <CustomButton
          type="create"
          icon={<i className="bi bi-plus" style={{ fontSize: "30px" }}></i>}
          style={{
            width: "200px",
            height: "32px",
            position: "relative",
          }}
        >
          Create Note
        </CustomButton>

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
                pointerEvents: "none",
              }}
            ></i>
          )}

          <label
            htmlFor="search-input"
            style={{
              position: "absolute",
              left: "40px",
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

      {searchInputValue
        ? filteredNotes.map((note, index) => (
            <div
              key={index}
              className="mt-4"
              style={{
                cursor: "pointer",
                backgroundColor:
                  index === selectedNoteIndex ? "#EFF4FF" : "transparent",
              }}
              onClick={() => handleSelectedNote(note, index)}
            >
              <span>{note.title}</span>
              <p>{note.description.substring(0, 40) + "..."}</p>
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
          ))
        : notes.map((note, index) => (
            <div
              key={index}
              className="mt-4"
              style={{
                cursor: "pointer",
                backgroundColor:
                  index === selectedNoteIndex ? "#EFF4FF" : "transparent",
              }}
              onClick={() => handleSelectedNote(note, index)}
            >
              <span>{note.title}</span>
              <p>{note.description.substring(0, 40) + "..."}</p>
              <hr
                className=" "
                style={{
                  color: "grey",
                  width: "100%",
                  borderWidth: "1px",
                }}
              />
            </div>
          ))}
    </div>
  );
};

export default NoteComponent;
