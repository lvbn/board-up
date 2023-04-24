import { BoardUp } from './board-up';
import { NavBar } from './NavBar';
import React, { useEffect, useState } from 'react';
import { fetchAllBoardUps } from '../services/apiService';

export function BoardUpMAIN() {
  const [data, setData] = useState([]);

//API service
  async function fetchData() { 
   //bus = board-ups
    const bus =  await fetchAllBoardUps();
    return bus;
  }

  //Initialise
  useEffect(() => {
    fetchData().then((bus) => {
      setData(bus); //setData expects a value but fetchData() returns a Promise, to fix it add .then()
    }); 
  }, []);
  
  return (
    <div className='flex justify-center items-center pt-2 mr-10 w-[900px]'>
      
        <div className='bg-black object-contain'>
          {(!data[0]) ? <div></div> : data.map((bu) =>
            <BoardUp key={bu._id} bu={bu} button={true} />
            )}
        </div>
    </div>
  );
}