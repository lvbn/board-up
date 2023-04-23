import React, { useEffect, useState } from 'react';
import { fetchBoard } from './../../services/apiService';
import { BoardUp } from './../board-up'


//{userBU}
export function Strip(props) {
  const [bu, setBU] = useState({});

  const ID = props.value;
console.log(bu)
  //API service
  async function boardData() { 
   //bus = board-ups
    const data =  await fetchBoard(ID);
    return data ;
  }

  //Initialise
  useEffect(() => {
    // console.log(props)
    boardData().then((data) => {
      setBU(data); //setData expects a value but fetchData() returns a Promise, to fix it add .then()
    }); 
  }, []);


  // console.log(bu)
  return (
    <div className='text-slate-300'>OK
      <div>{bu.game}</div>
      <BoardUp key={bu._id} value={bu} />
    </div>
  )
}