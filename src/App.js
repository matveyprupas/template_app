import { useState } from 'react';
import './App.css';
import useUsersByCompanyId from './useUserByCompanyId';

function App() {
  const [_, setRender] = useState(false);
  const [companyId, setCompanyId] = useState(-1);
  const {users, isLoading, cacheUsers} = useUsersByCompanyId(companyId);

  const handleReload = () => {
    cacheUsers.delete(companyId);
    setRender(render => !render)
  }
  const handleSetCompanyId = (event) => {
    setCompanyId(event.target.value);
  }

  console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>Users by company ID</h1>

      <select onChange={handleSetCompanyId}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={15}>15</option>
      </select>

      {isLoading ? 'Users are loading...' : 
        !users.length ? 
        'There is no users' :
        <ul>
          {users.map(user => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      }
      <button onClick={handleReload}>Reload</button>
      
    </div>
  );
}

export default App;
