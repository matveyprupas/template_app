import './App.css';
import ToDoList from './ToDoList';

function App() {

  console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>TODO List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
