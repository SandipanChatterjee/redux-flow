import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./components/users/Users";
import UserForm from "./components/users/UserForm";

function App() {
  return (
    <div className="App">
      <Users />
      <UserForm />
    </div>
  );
}

export default App;
