import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Landing } from './Components/Landing';
import { ShowDetails } from './Components/ShowDetails'
import { Login } from './Components/Login'
//import { useEffect, useState } from "react";

export const SERVER_URL = "https://recommendation-1.herokuapp.com/"

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route exact path = "/" element = {<Login /> } />
        <Route path = "/showDetails/:id" element = {<ShowDetails />} />
        <Route path = "/landing" element = {<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
