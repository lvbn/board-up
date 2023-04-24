// StyleSheets
import './index.css';
//Useful libraries
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
//Methods
import { fetchAllBoardUps, postBoardUp } from './services/apiService';
//Components
import { BoardUpMAIN } from './components/board-up-main'
import { NavBar } from './components/NavBar';
import { Welcome } from './components/welcome';
import { Form } from './components/form';
import { UserDash } from './components/dashboard/userDashboard';
import { Panel } from './components/panel';

function App() {
//   const [data, setData] = useState([]);

  // const nav = useNavigate();

  // function goHome() {
  //   nav('/');
  // }  
  

  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Panel />} />
        <Route path='/user:TNT' element={<UserDash className="flex whitespace-nowrap overflow-auto scrollbar-hide" />} />
        
        <Route path='/board-ups' element={
          <div>
            <div className='sticky pb-2 top-0 z-50'>
              <NavBar/>
            </div>
            <div className=''>
              <BoardUpMAIN/>
            </div>         
          </div>
        } />
     
        <Route path='/new-board-up' element={
          <div>
              <Form/>
          </div>
          } />

      </Routes>
    </Router>
    
  
  );
}

export default App;
