import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import AddProject from "./components/Addproject";
import Projects from "./components/Projects";


function App() {
  

  const [showAdd,setShowAdd] = useState (false)
  const [projects, setProjects] = useState([])
 
  useEffect(() => {
    console.log('');
    // make api call to get projects
    axios.get(`http://localhost:3020/api/projects`)
      .then(function (response) {
        console.log(response.data);
        // I need this data here ^^
  setProjects([response.data])
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);

  // add project 
  const Addproject = (project) =>{
  const id = Math.floor(Math.random() * 1000) +1
  const newproject = {id, ...project}
  setProjects([...projects,newproject])
}
//delete project 
const deleteProject = (id) => {
  console.log(id);
  setProjects(projects.filter((project) => project.id !==id))

}
// reminder
const reminderchange = (id) => {
 setProjects(projects.map((project) => project.id === id ? {...project,reminder:!project.reminder}: project))
}
 
  return (
    <div className="container">
      <Wrapper>
     
      <Header title='Project Manager' onAdd={() => setShowAdd (!showAdd)} showAdd= {showAdd}/>
        {showAdd && <AddProject onAdd={Addproject} />}
      {projects.length > 0 ?<Projects projects={projects} onDelete={deleteProject} onToggle ={reminderchange}/> : "No Current Projects"}
      
   

        <Main/>

      </Wrapper>
    </div>
  );
}

export default App;