const mongoose = require("mongoose");

mongoose
  .connect(process.env.MURL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });
