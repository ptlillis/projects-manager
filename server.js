const express = require("express");
const mongoose = require("mongoose");
const developerRouter = require("./routes/api/developerRoutes");
const tech_stacksRouter = require("./routes/api/tech_stackRoutes");
const projectRouter = require("./routes/api/projectRoutes")


const app = express();

const PORT = process.env.PORT || 3020;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project_manager",
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  
}
);

app.use(developerRouter);
app.use(tech_stacksRouter);
app.use(projectRouter);



app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});