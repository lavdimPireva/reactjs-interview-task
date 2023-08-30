import React from "react";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const Main = () => {
  return (
    <div
      className="d-flex m-1"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Main;
