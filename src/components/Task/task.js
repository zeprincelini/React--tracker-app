import './task.css';
const SingleTask = ( {task} ) => {
    return(
        <div className="task">
            <h4>{task.text}</h4>
            <p>{task.day}</p>
        </div>
    )
}

export default SingleTask;