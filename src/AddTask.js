import { useState } from "react";
import './ToDoList.css'

const AddTask = ({onAdd}) => {

  const [newTaskText, setNewTaskText] = useState('');

  console.log('AddTask RENDERS');

  return (
    <div className="add">
      <input value={newTaskText} onChange={(event)=>setNewTaskText(event.target.value)} />
      <button onClick={() => onAdd(newTaskText)}>Add</button>
    </div>
  );
}

export default AddTask;