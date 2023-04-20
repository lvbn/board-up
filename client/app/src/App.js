// StyleSheets
import './index.css';
//Useful libraries
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
//Methods
import { fetchAllBoardUps, postBoardUp } from './apiService';
//Components
import { BoardUpMAIN } from './components/board-up-main'
import { NavBar } from './components/NavBar';
import { Welcome } from './components/welcome';
import { Form } from './components/form';

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
        
        <Route path='/board-ups' element={
          <div>
            <div className='sticky pt-2 pb-2 top-0 z-50 border-4 border-cyan-800'>
              <NavBar/>
            </div>
            <div className=''>
              <BoardUpMAIN/>
            </div>         
          </div>
        } />
     
        <Route path='/new-board-up' element={
          <div>
            {/* <div className='sticky pt-2 pb-2 top-0 z-50'>
               <div className='bg-black grid justify-items-center content-center'>
                <img src='./../../logo.png' className='h-20' alt='logo'
                  // onClick={goHome}
                ></img>
              </div>
            </div> */}
             {/* <main className='relative'> */}
              <Form/>
            {/* </main> */}
          </div>
          } />

      </Routes>
    </Router>
    
  
  );
}

export default App;
