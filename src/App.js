import './App.css';
import useUsersByCompanyId from './useUserByCompanyId';

function App() {

  const {users, isLoading} = useUsersByCompanyId(5);

  console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>Users by company ID</h1>

      {isLoading ? 'Users are loading...' : 
        !users.length ? 
        'There is no users' :
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
