import React from 'react'
import { FaTimes } from 'react-icons/fa'


function Developer({ developer, onDelete, onToggle }) {
    return (
        <div className={`task ${developer.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(developer.id)}>
            <h3> Name :{developer.name}
                <FaTimes style={{ color: 'red' }}
                    onClick={() =>
                        onDelete(developer.id)} />
            </h3>

   
            <p>Role: {developer.role}</p>
            




        </div>
    )
}

export default Developer
