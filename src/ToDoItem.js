import { memo } from 'react';
import './ToDoItem.css';

const ToDoItem = memo(({
  children,
  id,
  onDelete,
  onMove
}) => {

  console.log('Task render');

  return (
    <div className="item" >
      {children}
      <button onClick={() => onDelete(id)}>Del</button>

      <button onClick={() => onMove(true, id)} >Move Up</button>
      <button onClick={() => onMove(false, id)} >Move Down</button>
    </div>
  );
})

export default ToDoItem;