import express from 'express';
import mongoose from 'mongoose';

import ProjectRequirement from '../models/Project.js';

const router = express.Router();

export const getProjects = async (req, res) => { 
    try {
        const projectRequirements = await ProjectRequirement.find();
                
        res.status(200).json(projectRequirements);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProject = async (req, res) => { 
    const { id } = req.params;

    try {
        const project = await ProjectRequirement.findById(id);
        
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    const { duedate, message, selectedFile, project, tags } = req.body;

    const newProjectRequirement = new ProjectRequirement({ duedate, message, selectedFile, project, tags })

    try {
        await newProjectRequirement.save();

        res.status(201).json(newProjectRequirement );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { duedate, message, project, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    const updatedProject = { project, duedate, message, tags, selectedFile, _id: id };

    await ProjectRequirement.findByIdAndUpdate(id, updatedProject, { new: true });

    res.json(updatedProject);
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

    await ProjectRequirement.findByIdAndRemove(id);

    res.json({ message: "Project deleted successfully." });
}

export const UpdateDeveloper = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);
    
    const project = await ProjectRequirement.findById(id);

    const updatedProject = await ProjectRequirement.findByIdAndUpdate(id, { likeCount: project.likeCount + 1 }, { new: true });
    
    res.json(updatedProject);
}


export default router;