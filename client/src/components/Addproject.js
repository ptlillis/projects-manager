import { useState } from 'react'
// import TeachStack from './TechStack'
const AddProject = ({ onAdd }) => {
    const [name, setText] = useState('')
    // const [reminder, setReminder] = useState(false)
    const [tech_stacks, setTech_stacks] = useState('')
    const [developers, setDevelopers] = useState('')


    const onSubmit = (e) => {
        
        e.preventDefault()
        if (!name) {
            alert('Please add a task')
            return
        }
        onAdd({ name, tech_stacks, developers})
        setText('')
        setTech_stacks('')
        setDevelopers ('')
        // setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Project</label>
                <input
                    
                    type='text'
                    name="synopis"
                    placeholder='Add Project'
                    value={name}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
         
            <div className='form-control'>
                <label>Tech Stack</label>
                <input 
                    type=''
                    name="author"
                    placeholder='TechStack'
                    value={tech_stacks}
                    onChange={(e) => setTech_stacks(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Requierd Devolepers</label>
                <input
                name="synopis"
                    type='text'
                    placeholder='TechStack'
                    value={developers}
                    onChange={(e) => setDevelopers(e.target.value)}
                />
            </div>
      
            {/* <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div> */}
            <input type='submit' value='Add Project' className='btn btn-block' />
        </form>
    )
}

export default AddProject