const connectDb = require("./db/connect");
const express = require("express");
const app = express();

const router = require("./routes/blogsRoute");
//get uri from env file
require('dotenv').config();

//middleware
app.use(express.json());
app.use("/api/v1/blog",router );

// connect to database and start server or else Error
const start = async () => {
  try {
    await connectDb(process.env.DB_URI);
   
  } catch (error) {
    console.log("Data Base Error happened !!");
  }
};
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
start();
