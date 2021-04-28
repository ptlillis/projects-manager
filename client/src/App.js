import { useEffect } from 'react'
import { useState } from 'react'

import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";
import AddProject from "./components/Addproject";
import Projects from "./components/Projects";
import API from './utils/API';


function App() {
  

  const [showAdd,setShowAdd] = useState (false)
  const [projects, setProjects] = useState([])
 
  useEffect(() => {
  loadProjects()
  },[]);
// show projects
function loadProjects() {
API.getProjects()

.then(res => {
  setProjects(res.data);
  console.log(res.data);
}



)
  .catch(err => console.log(err));


}
// add project 
  const Addproject = (project) =>{

  const newproject = {...project}
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