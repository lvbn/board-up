// import './../styles/board-up-main.css';
import { BoardUp } from './board-up';
import React, { useEffect, useState } from 'react';
import { fetchAllBoardUps , postBoardUp } from './../apiService';

export function BoardUpMAIN() {
  const [data, setData] = useState([]);

  async function fetchData() { 
   //bus = board-ups
    const bus =  await fetchAllBoardUps();
    return bus;
  }

  console.log(data)
  //Initialise
  useEffect(() => {
    fetchData().then((bus) => {
      setData(bus); //setData expects a value but fetchData() returns a Promise, to fix it add .then()
    }); 
  }, []);
  
    return (
      <div className='main'>
        <div className='container'>
          {(!data[0]) ? <div></div> : data.map((bu) =>
              <BoardUp key={bu._id} bu={bu}/>
            )}
        </div>
    </div>
  );
}