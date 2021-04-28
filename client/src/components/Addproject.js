import { useState } from 'react'
// import TeachStack from './TechStack'
const AddProject = ({ onAdd }) => {
    const [name, setText] = useState('')

    const [due_date, setDue_date] = useState('')
    // const [reminder, setReminder] = useState(false)
    const [tech_stacks, setTech_stacks] = useState('')
    const [developers, setDevelopers] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add a task')
            return
        }

        onAdd({ name, due_date,  tech_stacks, developers})

        setText('')
        setDue_date('')
   
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
                    placeholder='Add Project'
                    value={name}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
         
            <div className='form-control'>
                <label>Tech Stack</label>
                <input 
                    type=''
                    placeholder='TechStack'
                    value={tech_stacks}
                    onChange={(e) => setTech_stacks(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Requierd Devolepers</label>
                <input
                    type='text'
                    placeholder='TechStack'
                    value={developers}
                    onChange={(e) => setDevelopers(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>due_date</label>
                <input
                    type='text'
                    placeholder='Add a Due_date'
                    value={due_date}
                    onChange={(e) => setDue_date(e.target.value)}
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