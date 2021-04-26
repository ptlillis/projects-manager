import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import projectRoutes from '../server/routes/projects.js'

const app = express();

/*  every route inside projects.js, it is going to start with 
projects --> localhost:5000/projects
Because we added the prefix /projects
here we are adding /projects to all routes localhost:5000/projects
*/
app.use('/projects', projectRoutes);



app.use(express.json({ limit: "30", extend: true }))
app.use(express.urlencoded({ limit: "30", extend: true }))
// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



// const CONNECTION_URL = 'mongodb+srv://mernpro:project123@cluster0.f5iui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const CONNECTION_URL = 'mongodb+srv://projectadmin:javascript@cluster0.o4nz7.mongodb.net/projectsmanager?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);