import React, { useEffect, useState } from "react";
import CustomButton from "../Button/CustomButton";

const RightSide = () => {
  const [notes, setNotes] = useState({});
  const [title, setTitle] = useState(null);
  const [noteDescription, setNoteDescription] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetCategory = "Category (2)";

    const newNote = { title, description: noteDescription };

    if (!notes[targetCategory]) {
      notes[targetCategory] = [];
    }

    notes[targetCategory].push(newNote);

    setNotes({ ...notes });

    console.log("note", notes);

    setTitle("");
    setNoteDescription("");

    localStorage.setItem("notes", JSON.stringify(notes));
  };

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={noteDescription}
          onChange={(e) => setNoteDescription(e.target.value)}
        ></textarea>

        <CustomButton
          type="save"
          icon={<i class="bi bi-check2" style={{ fontSize: "24px" }}></i>}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          Save Changes
        </CustomButton>
      </form>
    </div>
  );
};

export default RightSide;
