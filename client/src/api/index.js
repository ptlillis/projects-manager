import axios from 'axios';

const url = "http://localhost:5000/projects";

export const fetchProjects = () => axios.get(url);
export const updateProject = (id, updatedProject) =>  axios.patch(`${url}/${id}`, updatedProject);


export const createProject = (newProject) => axios.project(url, newProject);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);


export const UpdateDeveloper = (id) => axios.patch(`${url}/${id}/UpdateDeveloper`);




