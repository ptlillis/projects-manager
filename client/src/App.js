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
//

  const Addprojects = async (project) => {
    const res = await fetch('http://localhost:3020/api/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })

    const data = await res.json()
    setProjects([...projects,data])
  }
// // add project 
// //   function Addprojects
// const data = await res.json()
// setProjects([...projects,data ])
//   }
//delete project 
const deleteProject = async(id)=> {
  await fetch(
    `http://localhost:3020/api/projects/${id}`, {
      method: 'DELETE',
    })
  
  setProjects(projects.filter((project) => project.id !==id))

}
// reminder
const reminderchange = (id) => {
 setProjects(projects.map((project) => project.id === id ? {...project,reminder:!project.reminder}: project))
}
 
  return (
    <div className="container">
      <Wrapper>
        {/* <Jumbotron>
          <h1>Hello, world!</h1>
        </Jumbotron> */}
     
      <Header title='Project Manager' onAdd={() => setShowAdd (!showAdd)} showAdd= {showAdd}/>
        {showAdd && <AddProject onAdd={Addprojects} />}
      {projects.length > 0 ?<Projects projects={projects} onDelete={deleteProject} onToggle ={reminderchange}/> : "No Current Projects"}
      
   

        <Main/>

      </Wrapper>
    </div>
  );
}

export default App;