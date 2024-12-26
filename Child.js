import React, { useState } from "react";

const Child = ({ message, sendMessage }) => {
  const [childInput, setChildInput] = useState(""); // Message to send to the parent

  const handleSendMessage = () => {
    sendMessage(childInput); // Call the parent's callback function
  };

  return (
    <div style={{ border: "2px solid gray", padding: "20px", marginTop: "10px" }}>
      <h2>Child Component</h2>
      <p>Message from Parent: {message}</p>
      <input
        type="text"
        placeholder="Type a message for Parent"
        value={childInput}
        onChange={(e) => setChildInput(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send to Parent</button>
    </div>
  );
};

export default Child;
