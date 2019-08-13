import React from "react";

function Timeinput({ handleSumbit, sec, handleChange }) {
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h3>Input time in the timer</h3>
      <form onSubmit={handleSumbit}>
        <input
          id="timetext"
          type="number"
          onChange={handleChange}
          placeholder="eg:20 seconds"
          value={sec}
        />
      </form>
    </div>
  );
}

export default Timeinput;
