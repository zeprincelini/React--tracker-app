import './task.css';
const SingleTask = ( { task, onDelete, onToggle } ) => {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
            <div>
                <h4>{task.text}</h4>
                <p>{task.day}</p>
            </div>
            <div>
                <button onClick = {() => onDelete(task.id)}>delete</button>
            </div>
        </div>
    )
}

export default SingleTask;