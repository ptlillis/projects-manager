const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tech_stackSchema = new Schema({
  _id: {
      type: Schema.Types.ObjectId,
      required: true
  },
  name: {
      type: String,
      required: true
  },
  Description: {
      type: String
  }
});

const Tech_stack = mongoose.model("Tech_stacks", Tech_stackSchema);


module.exports = Tech_stack;
