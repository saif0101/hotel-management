import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App(props) {
  const[loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]} >
     {/* <h3>Name: {loggedInUser.name}</h3> */}
     <BrowserRouter>
     <Header/>
     <Routes> 
     <Route path="/" element={<Navigate to ="/home" />}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/book/:bedType" element={<PrivateRoute user ={loggedInUser.email}><Book/>
     </PrivateRoute> }/>
   
      </Routes>
      </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
