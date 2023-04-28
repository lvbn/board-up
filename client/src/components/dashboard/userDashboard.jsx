import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../services/apiService';
import { Strip } from './strip'
import { BoardUpMAIN } from '../board-up-main';
import { NavBar } from './../NavBar';

const message = 'Looking for a match? Join a boardup'

export function UserDash() {
  const [user, setUser] = useState({});
  const [bus, setBUS] = useState(null);
  const [hosting, setHosting] = useState(null);
  const [header, setHeader] = useState(message);
  
  console.log(user)

  //API Service
  async function userData(username) {
    const data = await fetchUser(username);
    return data
  }

  ///Initialise
  useEffect(() => { //username provisional, this should work for all users

  const username = 'TNT';
  // const username = 'cyberpunk';
  
    userData(username).then((res) => {
      setUser(res); //setData expects a value but fetchData() returns a Promise, to fix it add .then()
      // setBUS(res.myBUs);
    }); 
  }, [bus]);

  function showAttending () {
    setHeader('Attending')
    setBUS(user.myBUs)
    return
  }

  function showHosting() {
    
    console.log(hosting)
    setHeader('Hosting')
    setHosting(user.hosting)
    return
  }

  function goBoardUp() {
    // setBUS(null)
    setHosting(null)
    setHeader(message)
  }


  return (
    <div className='flex flex-row text-slate-300 text-3xl font-mono flex border-0 m-2 overscroll-none'>
    
      <div className='h-screen basis-2/5 text-slate-300 border-solid border-r-2 border-accent'>
        <div className='mt-6 flex flex-col items-center'>
          <div className='flex flex-row' >
            <img src='./../../logo.png' className='cursor-pointer pr-4 h-10 cursor-pointer' alt='click to redirect to board-ups'
              onClick={goBoardUp}
            ></img>
            <div className='pt-2 text-accent text-xl font-mono font-medium'>
              boardup
            </div>
          </div>
          <div className='flex mt-8 mb-1'>
            <img className='rounded-full w-40 min-w-full' alt='user profile' src={user.photo} />
          </div>
          <div className='text-center text-base'>{user.firstname} {user.lastname}</div>
          <div className='text-center text-base text-accent font-bold'>@{user.username}</div>
          <div className='text-center text-sm font-sans italic'>- {user.status}</div>
          <button className='mt-3 mb-2 text-center text-xs text-slate-300 border border-1 border-slate-300 pr-1 pl-1 rounded-full'>edit</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base  text-center hover:bg-accent text-black mt-5 rounded'
            type='submit' onClick={showAttending}>Attending</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black mt-5 rounded'
            type='submit' onClick={showHosting}>Hosting</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black  mt-5 rounded'
            type='submit' onClick={goBoardUp} >boardups</button>
    
        </div>
      </div>
     
      <div className="h-screen flex flex-col w-full">
        <div className='text-xl text-accent ml-6 mt-2'><span className='border-black rounded bg-zinc-900 pl-2 pr-2 pb-4'>{header}</span></div>
        <NavBar />
        <div className='h-3/4 w-1/2 mr-10 flex-none flex-col self-center scrollbar-hide overflow-y-scroll'>
          {!bus ? <BoardUpMAIN/>
            : (header === 'Attending') ? 
                  bus.map((bu, index) =>
                    <Strip key={index} value={bu} username={user.username}/>) : (header === message) ? <BoardUpMAIN/> : null
          }
           {!hosting ? null
            : (header === 'Hosting') ? 
                  hosting.map((bu, index) =>
                    <Strip key={index} value={bu} username={user.username} />) :  (header === message) ? <BoardUpMAIN/> : null
          }
        </div>
      </div>
      
    </div>
  );
}