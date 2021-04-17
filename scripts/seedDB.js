const mongoose = require("mongoose");
const db = require("../models/Developer");

// This file empties the developer collection and inserts the developer below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project_manager"
);



const developerSeed = [
    {
        name: "Adam",
        role: "JavaScript"
    },
    {
        name: "Ali",
        role: "Database"
    },
    {
        name: "Peter",
        role: "Front-end"
    }
]


db.developer
  .destroy({})
  .then(() => db.developer.collection.insertMany(developerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
