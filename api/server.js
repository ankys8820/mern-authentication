const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db");
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// middleware
app.use(express.json());
app.use(cors());

// adding routes
app.use("/api/", userRoutes);
app.use("/api/", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
