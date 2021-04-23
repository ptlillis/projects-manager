import Project from './Project'

const Projects = ({projects, onDelete, onToggle}) => {

    
    return (
        <>
            {projects.map((project) => (
                <Project 
                key={project.id} 
                project={project} 
                onDelete={onDelete}
                onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Projects