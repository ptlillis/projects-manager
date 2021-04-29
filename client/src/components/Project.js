import React from 'react'
import { FaTimes } from 'react-icons/fa'


function Project({project, onDelete,onToggle}) {
    return (
        <div className={`task ${project.reminder ? 'reminder' : ''}`}
         onDoubleClick={() => onToggle(project .id)}>
        <h3>{project.name}
        <FaTimes style= {{ color:'red'}} 
        onClick={() =>
        onDelete(project.id)}/>
        </h3>
           
            <p>Assigned Developers :  {project.developers[0].name}</p>
            <p> Project Requirements : {project.tech_stack[0].name}</p>
            <p> Number Of Developers : {project.tech_stack[0].count}</p>

             
           
            
        </div>
    )
}

export default Project
