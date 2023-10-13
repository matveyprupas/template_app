import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import initialTasks from "./mock/tasks.json";
// import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState(initialTasks);

  const handleChangeTasks = (tasks) => {
    setTasks(tasks);
  }

  // const handleDelete = (id) => {
  //   console.log(id);
  //   setTasks(tasks.filter(task => id !== task.id))
  // }

  // const handleAdd = (value) => {  
  //   if (!value) return;
  //   const newTask = {title: value, id: uuidv4()}
  //   setTasks([...tasks, newTask])
  // }

  console.log('App RENDERS');

  return (
    <div className="App">
      <h1>Users by company ID</h1>
      <ToDoList tasks={tasks} onChangeTasks={setTasks} />
    </div>
  );
}

export default App;
