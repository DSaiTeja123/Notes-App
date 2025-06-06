const mongoose = require("mongoose");
const { createIndexes } = require("./user.model");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  tags: {type: [String], default: []},
  isPinned: {type: Boolean, default: false},
  userId: {type: String, default: new Date().getTime()},
});

module.exports = mongoose.model("Note", noteSchema);