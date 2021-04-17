const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
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

const Developer = mongoose.model("Developers", DeveloperSchema);


module.exports = Developer;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const DeveloperSchema = new Schema({
//     _id: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         required: true
//     }
// });
// const Developers = mongoose.model("developers", DeveloperSchema,"Developers");
// module.exports = Developers