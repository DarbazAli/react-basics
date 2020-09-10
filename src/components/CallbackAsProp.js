import React, { useState } from "react";

const RenderInput = ({ input }) => {
  return (
    <div>
      <h3>Input Render:</h3>
      <p>{input}</p>
    </div>
  );
};

const GetInput = ({ input, handleChange }) => (
  <input type="text" value={input} onChange={handleChange}></input>
);

const CallbackAsProp = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <GetInput input={input} handleChange={handleChange} />
      <RenderInput input={input} />
    </div>
  );
};

export default CallbackAsProp;
