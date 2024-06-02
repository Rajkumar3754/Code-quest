const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectdb = require("./config/db.connection");
const dotenv = require("dotenv").config();  // Ensure .env file is loaded at the start

const app = express();

const PORT = process.env.PORT || 5000;

// Database connection
connectdb();

app.use(express.json());

// Use the route defined in 'contactroute.js' for the root path
app.use("/api/contact", require("./routes/contactroute"));
app.use("/api/user", require("./routes/userroute"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
