import { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";
import fetchTasks from "./utils";
import './ToDoList.css';
import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";
import {v4 as uuid} from 'uuid';

const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const tasksLength = useMemo(() => tasks.length, [tasks.length]);

  useEffect(() => {
    fetchTasks()
    .then(res => setTasks(res))
    .catch(err => console.error(err))
  }, []);

  const handleDelete = useCallback((id) => {
    setTasks(prevState => ([
      ...prevState.filter(task => task.id !== id)
    ]));
  }, []);

  const handleAdd = useCallback((taskText) => {
    setTasks(prevState => ([
      ...prevState,
      {
        title: taskText,
        id: uuid()
      }
    ]));
  }, []);

  const handleMove = useCallback((isUp, id) => {

    const selecedTaskIndex = tasks.findIndex(task => task.id === id);

    if(selecedTaskIndex === -1) return;

    if(isUp) {
      if(selecedTaskIndex === 0) return;

      setTasks(prevState => ([
        ...prevState.slice(0, selecedTaskIndex-1),
        ...prevState.slice(selecedTaskIndex-1, selecedTaskIndex+1).reverse(),
        ...prevState.slice(selecedTaskIndex+1)
      ]));
    } else if(!isUp) {
      if(selecedTaskIndex === tasksLength-1) return;

      setTasks(prevState => ([
        ...prevState.slice(0, selecedTaskIndex),
        ...prevState.slice(selecedTaskIndex, selecedTaskIndex+2).reverse(),
        ...prevState.slice(selecedTaskIndex+2)
      ]));    
    }
  }, [tasks, tasksLength]);

  console.log('List render');
  return (
    <div className="list">
      <div className="list__header">
        <AddTask onAdd={handleAdd} />
      </div>
      {tasks.map(task => (
        <ToDoItem 
          key={task.id} 
          id={task.id} 
          onDelete={handleDelete}
          onMove={handleMove}
        >
        {task.title}
        </ToDoItem>
      ))}
    </div>
  );
}

export default ToDoList;