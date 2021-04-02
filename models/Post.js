const mongoose = require("mongoose");

//schema describes how the data (posts here) looks

const PostSchema = mongoose.Schema({
  //bla bla bla, DJango JS bhai bhai
  title: {
    type: String,
    required: true, //compulsary
  },
  description: {
    type: String,
    required: true, //compulsary
  },
  date: {
    type: Date,
    default: Date.now(), //custom date input allowed
  },
});

module.exports = mongoose.model("Posts", PostSchema);
//name we want to give to this module and name of the middleware where they combine
