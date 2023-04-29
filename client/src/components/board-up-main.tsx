import { BoardUp } from './board-up';
import React, { useEffect, useState } from 'react';
import { fetchAllBoardUps } from '../services/apiService';
import { MockGame } from '../types/types';

export function BoardUpMAIN() {
  const [data, setData] = useState<MockGame[]>();

  //Initialise
  useEffect(() => {

    //API Service
    async function userData() {
      const data = await fetchAllBoardUps();
      console.log(data)
      return setData(data)
    }

    userData()
  }, []);

  return (
    // <div className=''> flex justify-center pt-2 mr-10 w-[900px]
      <div>
        <div className='bg-black object-contain'>
          {data ? data.map((bu) =>
              <BoardUp bu={bu} />
            )
            :
            null
          }
        </div>
    </div>
  );
}