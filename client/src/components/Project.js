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
            <p>{project.name}</p>
            <p>{}</p>
       
            
           
            
        </div>
    )
}

export default Project
