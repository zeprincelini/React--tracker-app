import { useState } from 'react';
import Header from './components/header/Header';
import Task from './components/tasks/tasks';
import Add from './components/add/add';
import './App.css';

function App() {
  const [showForm, setForm]= useState(false);
  const [tasks, setTask] = useState(
    [
      {
          'id': 1,
          'text': 'A wonderful day',
          'day': 'feb 2nd 2020',
          'reminder': true
      },
      {
          'id': 2,
          'text': 'Emptiness and',
          'day': 'feb 7th 2021',
          'reminder': true
      },
      {
          'id': 3,
          'text': 'De ja vu',
          'day': 'june 22nd 2020',
          'reminder': false
      }
  ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newtask = {id, ...task};
    console.log(newtask)
    setTask([...tasks, newtask]);
  }

  const onDelete = (id) => {
    console.log('delete me');
    setTask(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log(id);
    setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))

  }

  // const toggleForm = () => {
  //   setForm(!showForm);
  // }

  return (
    <div className="container">
     
        <Header toggler = {()=>setForm(!showForm)} showForm = {showForm}/>
       <div className="row">
         <div className="col-sm-6 mx-auto">
            {showForm && <Add addTask = {addTask}/>}
            {tasks.length > 0 ? <Task task = {tasks} onDelete = {onDelete} onToggle = {toggleReminder}/> : 'No Tasks Added'}
         </div>
       </div>
      
    </div>
  );
}

export default App;
