import SingleTask from '../Task/task';
const Task = ( { task, onDelete, onToggle } ) => {
return(
    <>
        {task.map((body) => (
                <SingleTask key ={body.id} task = {body} onDelete = {onDelete} onToggle = {onToggle}/>
        ))}
    </>
)
}

export default Task;