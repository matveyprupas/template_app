import { useState } from "react";
import './App.css';
import UsersList from "./UsersList";

function App() {

  const [companyId, setCompanyId] = useState(-1);

  const clickHandler = (event) => {
    if(event.target.tagName !== "INPUT") return;
    setCompanyId(+event.target.value);
  }

  // console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>Users by company ID</h1>
      <div onClick={clickHandler}>
        <input type="radio" id="contactChoice1" name="contact" value="1" />
        <label htmlFor="contactChoice1">Company 1</label>
        <input type="radio" id="contactChoice2" name="contact" value="2" />
        <label htmlFor="contactChoice2">Company 2</label>
        <input type="radio" id="contactChoice3" name="contact" value="3" />
        <label htmlFor="contactChoice3">Company 3</label>
      </div>
      <UsersList companyId={companyId}/>
    </div>
  );
}

export default App;
