import React, { useEffect, useState } from 'react';
import { fetchBoard } from '../../services/apiService';
import { BoardUp } from '../board-up'


//{userBU}
export function Strip(props) {
  const [bu, setBU] = useState({});

  const ID = props.value;

  //API service
  async function boardData() { 
   //bus = board-ups
    const data =  await fetchBoard(ID);
    return data ;
  }

  //Initialise
  useEffect(() => {

    boardData().then((data) => {
      setBU(data); //setData expects a value but fetchData() returns a Promise, to fix it add .then()
    }); 
  }, []);


  return (
    <div className=''>
      <BoardUp key={bu._id} bu={bu} button={false} />
    </div>
  )
}