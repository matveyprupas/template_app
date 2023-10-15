import { useMemo } from 'react';
import './App.css';
import useFilteredUsers from './useFilteredUsers';

function App() {

  const filterObject = useMemo(()=>({
    age: "3",
    name: "Matvey_19"
  }), []);

  const {users, isLoading} = useFilteredUsers(filterObject);

  console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>Filter users list</h1>
      {
        isLoading ? 
        'Users are loading...' : 
        <ul>
          {
            !users.length ? 
            'There is no users' :
            users.map(user => (
              <li key={user.name}>{user.name}</li>
            ))
          }
        </ul>
      }
      
    </div>
  );
}

export default App;
