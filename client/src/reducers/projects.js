import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (projects = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return projects.map((project) => (project._id === action.payload._id ? action.payload : project));
    case CREATE:
      return [...projects, action.payload];
    case UPDATE:
      return projects.map((project) => (project._id === action.payload._id ? action.payload : project));
    case DELETE:
      return projects.filter((project) => project._id !== action.payload);
    default:
      return projects;
  }
};
