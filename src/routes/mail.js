const express = require("express");
const SentEmail = require("../models/sentEmail"); // Assuming SentEmail model is defined

const router = express.Router();

// Send email using a secure API (e.g., Nodemailer with encryption)
async function sendEmail(config, emailData) {
  // Implement your secure email sending logic here
  // Replace with a secure email sending library like Nodemailer
  console.log("Email sent:", emailData);
  return true; // Simulate successful sending
}

router.post("/send", async (req, res) => {
  const { config, emailData } = req.body;
  try {
    await sendEmail(config, emailData);
    const sentEmail = new SentEmail(emailData);
    await sentEmail.save(); // Save sent email details in MongoDB
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

router.get("/sent", async (req, res) => {
  try {
    const sentEmails = await SentEmail.find();
    res.json(sentEmails);
  } catch (error) {
    console.error("Error fetching sent emails:", error);
    res.status(500).json({ message: "Error fetching sent emails" });
  }
});

module.exports = router;
