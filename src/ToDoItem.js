import './ToDoItem.css'

const ToDoItem = ({
  children, 
  onDelete, 
  id,
  onSelect,
  isSelected
}) => {

  console.log('ToDoItem RENDERS');

  return (
    <div 
      className={isSelected ? "item item_selected" : "item"}
      onClick={() => onSelect(id)}
    >
      {children}
      <button onClick={() => onDelete(id)}>Del</button>
    </div>
  );
}

export default ToDoItem;