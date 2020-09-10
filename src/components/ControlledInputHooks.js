import React, { useState } from "react";

const ControlledInputHooks = () => {
  const [input, setInput] = useState("Enter text..");
  return (
    <div>
      <h3>{input}</h3>
      <label htmlFor="input">Enter some text</label>
      <input
        type="text"
        value={input}
        id="input"
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
};

export default ControlledInputHooks;
