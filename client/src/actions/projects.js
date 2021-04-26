import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const UpdateDeveloper = (id) => async (dispatch) => {
  try {
    const { data } = await api.UpdateDeveloper(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
