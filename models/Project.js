const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        // required: true
    },
  
    tech_stacks: [
        new Schema({
            name: {
                type: String,
                // required: false 
            },
     
        })
    ],
    developers: [
        new Schema({
            name: {
                type: String,
                // required: false
            }
        })
    ]
});

const Project = mongoose.model("Projects", ProjectSchema);


module.exports = Project;