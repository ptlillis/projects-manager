import axios from "axios";
export default {
    // Gets all books
    getProjects: function () {
        return axios.get("http://localhost:3020/api/projects");
    },
    getDevelopers: function () {
        return axios.get("http://localhost:3020/api/Developers");
    },
    // Gets the book with the given id
    // getBook: function (id) {
    //     return axios.get("/api/books/" + id);
    // },
    // // Deletes the book with the given id
    // deleteproject: function (id) {
    //     return axios.delete("http://localhost:3020/api/projects" + id);
    // },
    // Saves a book to the database
    saveProject: function () {
        return axios.post("http://localhost:3020/api/projects");
    }
};