import React, { useState } from "react";
import { useCategoryContext } from "../context/CategoryContext";
import LeftSide from "./LeftSide";
import NoteComponent from "./NoteComponent";
import RightSide from "./RightSide";
import NoteDetails from "./NoteDetails";

const Main = () => {
  const { selectedCategory } = useCategoryContext();
  const [selectedNote, setSelectedNote] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const shouldShowNoteDetails = selectedNote && selectedCategory && isClicked;

  return (
    <div className="d-flex gap-3 mb-4 me-2 pb-2 bg-light">
      <div style={{ width: "370px" }}>
        <LeftSide setIsClicked={setIsClicked} />
      </div>

      {selectedCategory ? (
        <div
          className={shouldShowNoteDetails ? "" : "col"}
          style={shouldShowNoteDetails ? { width: "370px" } : {}}
        >
          <NoteComponent
            categoryName={selectedCategory}
            setSelectedNote={setSelectedNote}
            setIsClicked={setIsClicked}
          />
        </div>
      ) : (
        <div className="col">
          <RightSide />
        </div>
      )}

      {shouldShowNoteDetails && (
        <div style={{ width: "950px" }}>
          <NoteDetails note={selectedNote} isClicked={isClicked} />
        </div>
      )}
    </div>
  );
};

export default Main;
