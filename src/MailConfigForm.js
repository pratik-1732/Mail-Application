import React, { useState } from "react";

function MailConfigForm({ onSubmit }) {
  const [config, setConfig] = useState({
    host: "",
    port: "",
    secure: false, // Consider defaulting to false for security
    auth: {
      user: "",
      pass: "",
    },
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(config);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Mail Configuration</h2>
      <label htmlFor="host">SMTP Host:</label>
      <input
        type="text"
        id="host"
        name="host"
        value={config.host}
        onChange={handleChange}
        required
      />
      <label htmlFor="port">Port:</label>
      <input
        type="number"
        id="port"
        name="port"
        value={config.port}
        onChange={handleChange}
        required
      />
      <label htmlFor="secure">Use Secure Connection (SSL/TLS):</label>
      <input
        type="checkbox"
        id="secure"
        name="secure"
        checked={config.secure}
        onChange={handleChange}
      />
      <label htmlFor="user">Username:</label>
      <input
        type="text"
        id="user"
        name="auth.user"
        value={config.auth.user}
        onChange={handleChange}
        required
      />
      <label htmlFor="pass">Password:</label>
      <input
        type="password"
        id="pass"
        name="auth.pass"
        value={config.auth.pass}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Configuration</button>
    </form>
  );
}

export default MailConfigForm;
