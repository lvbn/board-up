import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchAllBoardUps, postBoardUp } from './apiService';
import { BoardUpMAIN } from './components/board-up-main'

function App() {
//   const [data, setData] = useState([]);

//  async function fetchData(){ 
//     const bus =  await fetchAllBoardUps(); //bus = board-ups
//     return bus;
//   }

//   console.log(data)
//   //Initialise
//   useEffect(() => {
//     fetchData().then((bus) => {
//       setData(bus); //setData expects a value but fetchData() returns a Promise, to fix it add .then()
//     }); 
//   }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <BoardUpMAIN/>
      </header>
    </div>
  );
}

export default App;
