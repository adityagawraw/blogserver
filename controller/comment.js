const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
});
