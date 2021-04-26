const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developerSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const DeveloperInfo = mongoose.model("Developers", developerSchema);


module.exports = DeveloperInfo;
