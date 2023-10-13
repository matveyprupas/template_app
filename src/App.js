import { useState } from "react";
import './App.css';
import Form from "./Form";

function App() {

  console.log('APP RENDERS');

  return (
    <div className="App">
      <h1>Users by company ID</h1>
      <Form/>
    </div>
  );
}

export default App;
