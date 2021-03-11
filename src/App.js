import { useState } from 'react';
import Header from './components/header/Header';
import Task from './components/tasks/tasks'
import './App.css';

function App() {
  const [tasks, setTask] = useState(
    [
      {
          'id': 1,
          'text': 'A wonderful day',
          'day': 'feb 2nd 2020'
      },
      {
          'id': 2,
          'text': 'Emptiness and',
          'day': 'feb 7th 2021'
      },
      {
          'id': 3,
          'text': 'De ja vu',
          'day': 'june 22nd 2020'
      }
  ]
  )

  return (
    <div className="App">
      <Header />
      <Task task = {tasks} />
    </div>
  );
}

export default App;
