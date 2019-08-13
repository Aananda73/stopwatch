import React from "react";

function Stopwatch({ time }) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        padding: "20px 60px",
        top: "50%",
        left: "50%",
        position: "relative",
        transform: "translate(-22%)"
      }}
    >
      <div
        style={{
          width: "70vh",
          height: "70vh",
          border: "5px solid red",
          borderRadius: "50%"
        }}
      >
        <h1 style={{ textAlign: "center", padding: "5vh", fontSize: "120px" }}>
          {time}
        </h1>
      </div>
    </div>
  );
}

export default Stopwatch;
