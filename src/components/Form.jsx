import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          aria-label="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          aria-label="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
