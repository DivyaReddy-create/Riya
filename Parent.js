import React, { useState } from "react";
import Child from "./Child"; // Import the Child component

const Parent = () => {
  const [parentMessage] = useState("Hello from Parent!"); // Parent's message
  const [childMessage, setChildMessage] = useState(""); // Message from the child

  // Callback function to receive a message from the child
  const receiveMessageFromChild = (message) => {
    setChildMessage(message);
  };

  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h1>Parent Component</h1>
      <p>Message from Child: {childMessage || "No message received yet"}</p>
      <Child message={parentMessage} sendMessage={receiveMessageFromChild} />
    </div>
  );
};

export default Parent;
