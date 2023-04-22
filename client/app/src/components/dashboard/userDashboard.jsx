import { USERS } from './../../services/mockUser'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function UserDash() {
  // const [user, setUser] = useState('');

  const mockUser = 'TNT'
  
  const nav = useNavigate();

  function goBoardUp() {
    nav('/board-ups');
  }  
  

  const renderUser = USERS.find((user) => user.username === mockUser);
  console.log(renderUser);
  // setUser(renderUser)

  return (
    <div className='flex flex-row text-slate-300 text-3xl font-mono flex'>
    
      <div className='mt-2 basis-1/4 text-slate-300'>       
        <div className='mt-1 flex flex-col items-center'>
            <div className='flex flex-row' >
              <img src='./../../logo.png' className='cursor-pointer pr-4 h-12 cursor-pointer' alt='logo'
                  onClick={goBoardUp}
              ></img>
              <div className='pt-2 text-accent text-xl font-mono font-medium'>
                  boardup
              </div>
          </div>
          <div className='flex mt-8 mb-3'>
            <img className='rounded-full w-40 min-w-full' alt='user profile pic' src={renderUser.photo} />
          </div>
            <div className='text-center text-sm text-accent font-bold'>@{renderUser.username}</div>
            <div className='text-center text-sm font-bold'>{renderUser.firstname}</div>
            <div className='text-center text-sm'>{renderUser.status}</div>
            <button className='mt-2 mb-2 text-center text-xs text-slate-300 border border-1 border-slate-300 pr-1 pl-1 rounded-full'>edit</button>
          {/* <div className='bg-slate-300 items-center'> */}
              <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black  mt-5 rounded'
              type='submit' onClick={goBoardUp} >Board-ups</button>
              <button className='bg-slate-300 w-48 pb-3 pt-3 text-base  text-center hover:bg-accent text-black mt-5 rounded'
              type='submit'>Attending</button>
              <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black mt-5 rounded'
              type='submit'>Hosting</button>
          {/* </div> */}
    
        </div>
      </div>
      <div className=''>
        <div className='ml-20 mt-10 content-end'>
          <img src='./../../logo.png' className='cursor-pointer pl-10 pr-10 h-12 cursor-pointer' alt='logo'
          // onClick={goHome}
          ></img>
          <br/>
        </div>
        <div className='flex ml-20'>
          Flex box element
        </div>
      </div>

    </div>
  )
}