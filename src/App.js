import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Task from './components/tasks/tasks';
import Add from './components/add/add';
import About from './components/about/about';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  const [showForm, setForm]= useState(false);
  const [tasks, setTask] = useState([])

  useEffect(() => {
   const getTasks = async () => {
     const tasksFromServer = await fetchTasks();
     setTask(tasksFromServer);
   }
   getTasks()
  }, [])


  //fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return(data);
  }

  //fetch task from server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return(data);
  }

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newtask = {id, ...task};
    // console.log(newtask)
    // setTask([...tasks, newtask]);
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTask([...tasks, data]);
  }

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {method: 'DELETE'
      });
    setTask(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const toggleReminderServer = await fetchTask(id);
    const updateTask = {...toggleReminderServer, reminder: !toggleReminderServer.reminder}
    const serverUpdate = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
        body: JSON.stringify(updateTask)
    })
    const updatedData = await serverUpdate.json()
    setTask(tasks.map((task) => task.id === id ? {...task, reminder: updatedData.reminder} : task))

  }

  // const toggleForm = () => {
  //   setForm(!showForm);
  // }

  return (
    <Router>
    <div className="container-fluid">
     <Header toggler = {()=>setForm(!showForm)} showForm = {showForm}/>
       <div className="row">
         <div className="col-sm-6 mx-auto">
           <Route path="/" exact render = {(props) => (
             <>
                 {showForm && <Add addTask = {addTask}/>}
                  {tasks.length > 0 ? <Task task = {tasks} onDelete = {onDelete} onToggle = {toggleReminder}/> : 'No Tasks Added'}
             </>
           )}/>
           <Route path="/about" component= {About}/>
           <Footer/>
         </div>
       </div>
    </div>
    </Router>
  );
}

export default App;
