import { useState } from 'react';

const Add = ( {addTask} ) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!text){
            alert('Please Add Task');
            return
        }
        addTask({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <div className="row">
            <div className="col-sm-12">
                <form method ="POST" onSubmit = {onSubmit}>
                    <div className="form-group">
                        <label htmlFor="task">Task</label>
                        <input type="text" name="task" id="task" className="form-control"
                         value = {text} onChange = {(e) => setText(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="day">Day & Time</label>
                        <input type="text" name="day" id="day" className="form-control"
                        value = {day} onChange = {(e) => setDay(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <div style = { {display: 'flex', alignItems: 'center'} } >
                            <label htmlFor="reminder">Reminder</label>
                            <input type="checkbox" name="reminder" className="form-control"
                            checked={reminder} value = {reminder} onChange = {(e) => setReminder(e.currentTarget.checked)}
                            style ={{height: '20px', width: '100px'}}/>
                        </div>
                    </div>
                    <input type="submit" value="Save New Task" className="btn btn-primary" style={{width: '100%'}}/>
                </form>
            </div>
        </div>
    )
}
export default Add;