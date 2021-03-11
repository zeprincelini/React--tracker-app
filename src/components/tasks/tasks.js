import SingleTask from '../Task/task';
const Task = ( { task } ) => {
return(
    <>
        {task.map((body) => (
                <SingleTask key ={body.id} task = {body}/>
        ))}
    </>
)
}

export default Task;