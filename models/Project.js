const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    tech_stack: [
        new Schema({
            name: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                required: true
            }
        })
    ],
    developers: [
        new Schema({
            name: {
                type: String,
                required: true
            }
        })
    ]
});

const Project = mongoose.model("Project", ProjectSchema);


module.exports = Project;