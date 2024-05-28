import React, { useState } from "react";

function ComposeMailForm({ onSubmit }) {
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "subject":
        setSubject(value);
        break;
      case "to":
        setTo(value);
        break;
      case "body":
        setBody(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ subject, to, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Compose Mail</h2>
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={subject}
        onChange={handleChange}
        required
      />
      <label htmlFor="to">To:</label>
      <input
        type="email"
        id="to"
        name="to"
        value={to}
        onChange={handleChange}
        required
      />
      <label htmlFor="body">Body:</label>
      <textarea
        id="body"
        name="body"
        value={body}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Email</button>
    </form>
  );
}

export default ComposeMailForm;
