import React, { useState, useEffect } from "react";
import "../src/App.css";
import MailConfigForm from "../src/MailConfigForm";
import ComposeMailForm from "../src/ComposeMailForm";
import SentEmailsList from "../src/SentEmailsList";
// import { fetchSentEmails, sendEmail } from "../backend/api"; // Assuming backend API calls

function App() {
  const [smtpConfig, setSmtpConfig] = useState(null);
  const [sentEmails, setSentEmails] = useState([]);

  useEffect(() => {
    const loadSentEmails = async () => {
      const emails = await fetchSentEmails(); // Fetch from backend database
      setSentEmails(emails);
    };
    loadSentEmails();
  }, []);

  const handleConfigSubmit = async (config) => {
    setSmtpConfig(config);
    try {
      await sendEmail(config); // Send test email using backend API
      alert("Mail configuration successful!");
    } catch (error) {
      console.error("Error sending test email:", error);
      alert("Error configuring mail. Please check details.");
    }
  };

  const handleSendEmail = async (emailData) => {
    if (!smtpConfig) {
      alert("Please configure your mail settings before sending.");
      return;
    }
    try {
      await sendEmail(smtpConfig, emailData); // Send email with configured settings
      alert("Email sent successfully!");
      setSentEmails([...sentEmails, emailData]); // Update sent emails list locally
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div className="App">
      <h1>Mail Sender</h1>
      {!smtpConfig && <MailConfigForm onSubmit={handleConfigSubmit} />}
      {smtpConfig && (
        <>
          <ComposeMailForm onSubmit={handleSendEmail} />
          <SentEmailsList emails={sentEmails} />
        </>
      )}
    </div>
  );
}

export default App;
