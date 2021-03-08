const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchema = new schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  RemoveAfter: {
    type: Date,
    default: Date.now,
    expires: 0,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
