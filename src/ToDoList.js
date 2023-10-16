import { useState } from "react";
import ToDoItem from "./ToDoItem";
import {v4 as uuid} from 'uuid';
import './ToDoList.css'
import AddTask from "./AddTask";

const initialTasks = [
  {
    title: 'Prepare to interview',
    id: '1',
  },
  {
    title: 'Clean dust',
    id: '2',
  },
  {
    title: 'Get presents for holidays',
    id: '3',
  },
];

const ToDoList = () => {

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState('');

  const handleAddTask = (newTaskText) => {
    setTasks([...tasks, {
      title: newTaskText,
      id: uuid(),
    }]);
  }  

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleMove = (event) => {
    if(!selectedTaskId) return;

    const selectedTaskIndex = tasks.findIndex(el => el.id === selectedTaskId);

    if(event.target.textContent.toLowerCase().includes('up')) {
      if(selectedTaskIndex === 0) return;

      setTasks([
        ...tasks.slice(0, selectedTaskIndex-1),
        ...tasks.slice(selectedTaskIndex-1, selectedTaskIndex+1).reverse(),
        ...tasks.slice(selectedTaskIndex+1)
      ]);
    } else if(event.target.textContent.toLowerCase().includes('down')) {
      if(selectedTaskIndex === tasks.length-1) return;

      setTasks([
        ...tasks.slice(0, selectedTaskIndex),
        ...tasks.slice(selectedTaskIndex, selectedTaskIndex+2).reverse(),
        ...tasks.slice(selectedTaskIndex+2)
      ]);
    }
  }

  console.log('ToDoList RENDERS');

  return (
    <div className="list">
      <div className="list__header">
        <AddTask onAdd={handleAddTask} />
        <div>
          <button onClick={handleMove}>Move Up</button>
          <button onClick={handleMove}>Move Down</button>
        </div>
      </div>
      {tasks.map(task => (
        <ToDoItem 
          key={task.id} 
          id={task.id} 
          onDelete={handleDeleteTask}
          isSelected={selectedTaskId === task.id}
          onSelect={setSelectedTaskId}
        >
          {task.title}
        </ToDoItem>
      ))}

    </div>
  );
}

export default ToDoList;