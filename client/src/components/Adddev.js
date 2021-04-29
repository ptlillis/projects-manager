import { useState } from 'react'
// import TeachStack from './TechStack'
const AddProject = ({ onAdd }) => {
    const [name, setText] = useState('')
    const [role, setRole] = useState('')


    const onSubmit = (e) => {

        e.preventDefault()
        if (!name) {
            alert('Please add a task')
            return
        }
        onAdd({ name, role})
        setText('')
        
        setRole('')
        // setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Developer</label>
                <input

                    type='text'
                    name="synopis"
                    placeholder='Add Developer'
                    value={name}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Devoleper Role</label>
                <input
                  
                    type='text'
                    placeholder='Role'
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
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
            <input type='submit' value='Add Developer' className='btn btn-block' />
        </form>
    )
}

export default AddProject