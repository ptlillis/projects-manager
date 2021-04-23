import React from 'react'
import { FaTimes } from 'react-icons/fa'


function Project({project, onDelete,onToggle}) {
    console.log(project);
    
    const maping = project.map((project) =>
   
        <div key={project.id} 
        className={`task ${project.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => onToggle(project.id)}>
        <h3>{project.name}
            <FaTimes style={{ color: 'red' }}
                onClick={() =>
                    onDelete(project.id)}
                    />
        </h3>
        <p>{project.details}
        </p>



    </div>)
    return (maping)
}

export default Project
