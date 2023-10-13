
import { useEffect, useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import './ToDoList.css';
import { v4 as uuidv4 } from 'uuid';

function ToDoList({tasks, onChangeTasks}) {

  const [newTaskText, setNewTaskText] = useState('');
  const [focusedTaskId, setFocusedTaskId] = useState('');
  // console.log(focusedTaskId, );

  // useEffect(()=>{
  //   // tasks
  // })

  const handleDelete = (id) => {
    console.log(id);
    onChangeTasks(tasks.filter(task => id !== task.id))
  }

  const handleAdd = () => {  
    if (!newTaskText) return;
    const newTask = {title: newTaskText, id: uuidv4()}
    onChangeTasks([...tasks, newTask])
  }

  const handleMove = (action) => {
    console.log('tasks', tasks);
    const indexFocusedTask = tasks.findIndex((task, i, arr) => {
      if(focusedTaskId === task.id) return true;
      return false;
    })
    if(action === 'up') {
      console.log('indexFocusedTask', indexFocusedTask);
      if(indexFocusedTask === 0) {
        return;
      }
      let newTasks = [...tasks];
      newTasks.forEach((task, i, arr) => {
        if(task.id === focusedTaskId) {
          [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
        }
      });
      onChangeTasks([...newTasks]);
    } else if(action === 'down') {
      console.log('indexFocusedTask', indexFocusedTask);
      if(indexFocusedTask === tasks.length-1) {
        return;
      }
      let newTasks = [...tasks];
      newTasks.forEach((task, i, arr) => {
        if(!arr[i+1] || i === 0) return;
        console.log(arr, arr[i+1].id);
        if(arr[i-1].id === focusedTaskId) {
          [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
        }
      });
      console.log('newTasks ', newTasks);
      onChangeTasks([...newTasks]);
    }
  }

  console.log('LIST RENDERS');
  return (
    <div className="list">
      <nav className='list__nav'>

        <input type="text" value={newTaskText} onChange={(event) => setNewTaskText(event.target.value)} />
        <button onClick={handleAdd} >ADD</button>

        <button onClick={()=>handleMove('up')} >Move up</button>
        <button onClick={()=>handleMove('down')} >Move down</button>
      </nav>
      {tasks.map((task) => (
          <ToDoItem 
            isFocused = {focusedTaskId === task.id ? true : false}
            key={task.id} 
            task={task} 
            onDelete={handleDelete} 
            onFocus={setFocusedTaskId} 
          />
        ))}
    </div>
  );
}

export default ToDoList;
