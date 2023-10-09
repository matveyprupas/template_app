import { useState } from "react";
import './App.css';
import UsersList from "./UsersList";
import SearchInput from "./SearchInput";

function App() {

  const [searchName, setSearchName] = useState('');

  console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>Users by company ID</h1>
      <SearchInput value={searchName} onChange={setSearchName} />

      <UsersList searchName={searchName} />
    </div>
  );
}

export default App;
