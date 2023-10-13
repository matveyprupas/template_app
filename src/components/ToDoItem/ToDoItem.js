import './ToDoItem.css';

function ToDoItem({task, onDelete, onFocus, isFocused}) {

  console.log('ITEM RENDERS');
  return (
    <div 
      className={isFocused ? 'item item_focused' : 'item'}  
      onClick={() => onFocus(task.id)} 
    >
      {task.title}
      <button onClick={() => onDelete(task.id)} >Del</button>
    </div>
  );
}

export default ToDoItem;
