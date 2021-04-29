import Project from './Project'

const Projects = ({projects, onDelete, onToggle}) => {

    
    return (
        <>
            {projects.map((project,index) => (
                <Project 
                key={index} 
                project={project} 
                onDelete={onDelete}
                onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Projects