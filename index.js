const connectDb = require("./db/connect");
const cors = require("cors");
const express = require("express");
const app = express();

const blogRouter = require("./routes/blogsRoute");
const userRouter = require("./routes/authRoute");
//get uri from env file
require('dotenv').config();

//middleware
app.use(cors())
app.use(express.json());
app.use("/api/v1/blog",blogRouter );
app.use("/api/v1/user", userRouter );

// connect to database and start server or else Error
const start = async () => {
  try {
    await connectDb(process.env.DB_URI); 
  } catch (error) {
    console.log("Data Base Error happened !!");
  }
  app.listen(4000, () => {
    console.log("server is running on port 4000");
  });
};

start();
