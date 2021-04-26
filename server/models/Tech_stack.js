const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const techStackSchema = new Schema({
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

const TechnologyStack = mongoose.model("Tech_stacks", techStackSchema);


module.exports = TechnologyStack;
