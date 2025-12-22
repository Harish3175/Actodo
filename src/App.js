import Card from "./components/Card";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {

  const [users,setusers]= useState([
    {
      username:"Harish",
      password:"123"
    },
    {
      username:"Hari",
      password:"123"
    }
  ])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
