import { FaTrash } from 'react-icons/fa'
import './task.css';
const SingleTask = ( { task, onDelete, onToggle } ) => {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
            <div>
                <h6 style={{margin: '0px'}}>{task.text}</h6>
                <p style={{margin: '0px'}}>{task.day}</p>
            </div>
            <div>
                <FaTrash style={{fontSize: '25px', color: '#920000', cursor: 'pointer'}} onClick = {() => onDelete(task.id)}/>
            </div>
        </div>
    )
}

export default SingleTask;