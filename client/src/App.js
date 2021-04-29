import { useEffect } from 'react'
import { useState } from 'react'

import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import DevForm from "./components/DevForm";
import Developers from "./components/Developers";
import "./App.css";
import AddProject from "./components/Addproject";
import Projects from "./components/Projects";
import API from './utils/API';
import Adddev from "./components/Adddev";




function App() {
  

  const [showAdd,setShowAdd] = useState (false)
  const [projects, setProjects] = useState([])
  const [developers, setDevelopers] = useState([])
 
  
  useEffect(() => {
  loadProjects()
    loadDevelopers()
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

// add dev
  function loadDevelopers() {
    API.getDevelopers()

      .then(res => {
        setDevelopers(res.data);
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
// // add dev
  const Adddevelopers = async (delevoper) => {
    const res = await fetch('http://localhost:3020/api/developers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(delevoper),
    })

    const data = await res.json()
    setProjects([...projects, data])
  }
// //   function Addprojects
// const data = await res.json()
// setProjects([...projects,data ])
//   }
//delete project 
const deleteProject = async(_id)=> {
  await fetch(
    `http://localhost:3020/api/projects/${_id}`, {
      method: 'DELETE',
    })
  
  setProjects(projects.filter((project) => project.id !== _id))

}
// deletedev 
  const deleteDevelopers = async (_id) => {
    await fetch(
      `http://localhost:3020/api/developers/${_id}`, {
      method: 'DELETE',
    })

    setProjects(developers.filter((developer) => developer.id !==_id))

  }
 
// reminder
const reminderchange = (id) => {
 setProjects(projects.map((project) => project.id === id ? {...project,reminder:!project.reminder}: project))
}
 
  return (
    <div className="container">
      {/* <Wrapper> */}
        {/* <Jumbotron>
          <h1>Hello, world!</h1>
        </Jumbotron> */}
        <div className="pro">
      <Header title='Project Manager' onAdd={() => setShowAdd (!showAdd)} showAdd= {showAdd}/>
        {showAdd && <AddProject onAdd={Addprojects} />}
      {projects.length > 0 ?<Projects projects={projects} onDelete={deleteProject} onToggle ={reminderchange}/> : "No Current Projects"}
        </div>
       
        <div className ="dev">
        <DevForm  title='Project Manager' onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
        {showAdd && <Adddev onAdd={Adddevelopers} />}
        {developers.length > 0 ? <Developers developers={developers} onDelete={deleteDevelopers} onToggle={reminderchange} /> : "No Current Projects"}
 </div>

        <Main/>

      {/* </Wrapper> */}
  
    </div>

  );
}

export default App;