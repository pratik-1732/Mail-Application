import React from "react";

function SentEmailsList({ emails }) {
  return (
    <div>
      <h2>Sent Emails</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            <strong>To:</strong> {email.to} - <strong>Subject:</strong>{" "}
            {email.subject}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SentEmailsList;
