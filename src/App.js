import { useState } from 'react';
import './App.css';
import InputFiels from './InputFiels';
import useUsers from './useUsers';

function App() {

  const [searchText, setSearchText] = useState('');

  const {users, isLoading} = useUsers(searchText);

  const handleSearch = (string) => {
    setSearchText(string);
  }

  console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>Search users</h1>
      <InputFiels
        onSearch={handleSearch}
      />
      {
        isLoading ? 
        'Users are loading...' : 
        !users.length ? 
        'There is NO users' :
        <ul>
          {users.map(user => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      }
      
    </div>
  );
}

export default App;
