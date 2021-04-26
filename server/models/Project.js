import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    due_date: {
        type: Date,
        required: true
    },
    tech_stacks: [
        {
            name: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                required: true
            }
        }
    ],
    developers: [
        {
            name: {
                type: String,
                required: true
            }
        }
    ]
});

const ProjectRequirement = mongoose.model("Projects", projectSchema);


export default ProjectRequirement;


