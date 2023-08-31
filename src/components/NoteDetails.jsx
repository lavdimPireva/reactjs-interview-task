import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { ToastContainer, toast } from "react-toastify";

// react-tostify
import "react-toastify/dist/ReactToastify.css";

const NoteDetails = ({ note, isClicked }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDescription, setEditedDescription] = useState(note.description);

  useEffect(() => {
    setEditedTitle(note.title);
    setEditedDescription(note.description);
  }, [note]);

  const handleSaveChanges = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || {};

    const noteCategory = Object.keys(storedNotes).find((category) =>
      storedNotes[category].some(
        (storedNote) => storedNote.title === note.title
      )
    );

    if (noteCategory) {
      const noteToUpdate = storedNotes[noteCategory].find(
        (storedNote) => storedNote.title === note.title
      );

      const hasTitleChanged = noteToUpdate.title !== editedTitle;
      const hasDescriptionChanged =
        noteToUpdate.description !== editedDescription;

      noteToUpdate.title = editedTitle;
      noteToUpdate.description = editedDescription;

      if (hasTitleChanged || hasDescriptionChanged) {
        const notify = () => toast("Note is updated");
        notify();
      }

      localStorage.setItem("notes", JSON.stringify(storedNotes));

      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div
      className="mt-2 me-2 p-2"
      style={{
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

      <input
        className="mt-3 ms-3 border-0 fw-light "
        style={{ outline: "none" }}
        type="text"
        placeholder="Add a title"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />

      <hr
        className="my-3 ms-2"
        style={{
          color: "#EFEFEF",
          width: "890px",
          borderWidth: "1px",
          borderColor: "grey",
        }}
      />

      <textarea
        className=" ms-3 border-0"
        rows={30}
        cols={85}
        placeholder="Write your note here..."
        style={{ outline: "none", resize: "none" }}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Write your note here...")}
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      ></textarea>

      <CustomButton
        type="delete"
        icon={<i class="bi bi-trash-fill" style={{ fontSize: "24px" }}></i>}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
        }}
      >
        Delete Changes
      </CustomButton>

      <CustomButton
        type="save"
        onClick={handleSaveChanges}
        icon={<i class="bi bi-check2" style={{ fontSize: "24px" }}></i>}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
        }}
      >
        Save Changes
      </CustomButton>

      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <ToastContainer />
      </div>
    </div>
  );
};

export default NoteDetails;
