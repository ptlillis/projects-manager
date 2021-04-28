import axios from "axios";
export default {
    // Gets all books
    getProjects: function () {
        return axios.get("http://localhost:3020/api/projects");
    },
    // Gets the book with the given id
    // getBook: function (id) {
    //     return axios.get("/api/books/" + id);
    // },
    // // Deletes the book with the given id
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id);
    // },
    // Saves a book to the database
    saveProject: function (projectData) {
        return axios.post("http://localhost:3020/api/projects",projectData);
    }
};