import { useState, memo } from "react";

const AddTask = memo(({
  onAdd
}) => {

  const [newTaskText, setNewTaskText] = useState('');

  console.log('ADD render');
  return (
    <div className="add">
      <input value={newTaskText} onChange={(event) => setNewTaskText(event.target.value)} />
      <button onClick={() => onAdd(newTaskText)}>Add</button>
    </div>
  );
})

export default AddTask;