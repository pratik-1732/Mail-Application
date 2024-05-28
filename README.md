# Mail Sending Application

This is a user-friendly mail application where users can configure their SMTP details or use other mail providers. Users can log in, set up their mail configuration, send emails directly from the application, and view sent emails in the sent folder.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Features

- **User Authentication:** Users can create accounts and log in securely.
- **Mail Configuration:** Users can set up their SMTP details or use other mail providers.
- **Send Emails:** Send emails directly from the application.
- **View Sent Emails:** Users can view their sent emails in the sent folder.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
- MongoDB installed and running locally, or a MongoDB Atlas account.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pratik-1732/Mail-Application.git
   cd mail-sending-application
   ```
2. **Install dependencies:**

```bash
npm install
```

### Setting Up Environment Variables

1. **Create a `.env` file in the root directory of the project.**
2. **Add the following environment variables to `.env`:**

```plaintext
# MongoDB connection URI
MONGODB_URI=<your-mongodb-uri>

# JWT secret for authentication
JWT_SECRET=<your-jwt-secret>

# Port number for the server
PORT=<port-number>
```

Replace `<your-mongodb-uri>` with your MongoDB connection URI, `<your-jwt-secret>` with a secret key for JWT token generation, and `<port-number>` with the desired port number for your server (default is 5000).

### Running the Application

1. **Start the server:**

```bash
npm start
```

2. **Start the frontend development server:**

```bash
cd client
npm start
```

3. **Open your browser and navigate to `http://localhost:3000` to use the application.**

## Usage

### 1. **Sign Up / Log In:**

Create an account or log in with existing credentials.

### 2. **Mail Configuration:**

Navigate to the settings page to configure SMTP details or select a mail provider.

### 3. **Compose and Send Emails:**

Use the compose feature to write and send emails directly from the application.

### 4. **View Sent Emails:**

Check the sent folder to view previously sent emails.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. **Fork the Project.**
2. **Create your Feature Branch `(git checkout -b feature/AmazingFeature)`.**
3. **Commit your Changes `(git commit -m 'Add some AmazingFeature')`.**
4. **Push to the Branch `(git push origin feature/AmazingFeature)`.**
5. **Open a Pull Request.**
