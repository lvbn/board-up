import { USERS } from '../../services/mockUser'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../services/apiService';
import { Strip } from './strip'
import { BoardUpMAIN } from '../board-up-main';
import { NavBar } from './../NavBar';

const message = 'Looking for a match? Join a board up!'

export function UserDash() {
  const [user, setUser] = useState({});
  const [bus, setBUS] = useState(null);
  const [header, setHeader] = useState(message);

  const mockUser = 'TNT';
  
  const nav = useNavigate();

  // function goBoardUp() {
  //   nav('/board-ups');
  // }  
  
  //API Service
  async function userData(id, username) {
    const data = await fetchUser({ id }, username);
    // console.log(data)
    return data
  }

  ///Initialise
  useEffect(() => { //username provisional, this should work for all users
      // TNT Mongo
    const ID= '64465d5d9604955e78e1f252';
    const username = 'TNT';

  // const ID = '64465d349604955e78e1f250';
  // const username = 'cyberpunk';
  
    userData(ID, username).then((res) => {
      setUser(res); //setData expects a value but fetchData() returns a Promise, to fix it add .then()
      // setBUS(res.myBUs);
    }); 
  }, []);

  // Rendering with mock user data ///
  // const renderUser = USERS.find((user) => user.username === mockUser);
  // console.log(renderUser);
  // setUser(renderUser)
  
  function showAttending () {
    // console.log(user.myBUs)
    setBUS(user.myBUs)
    setHeader('Attending')
    //fetch request for the event IDs
    return
  }

  function showHosting() {
    setBUS(user.myBUs)
    setHeader('Hosting')
    return
  }

  function goBoardUp() {
    setHeader(message)
  }


  return (
    <div className='flex flex-row text-slate-300 text-3xl font-mono flex border-0 m-2 overscroll-none'>
    
      <div className='h-screen mt-2 basis-1/4 text-slate-300 border-solid border-r-2 border-slate-300'>
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
            {/* <img className='rounded-full w-40 min-w-full' alt='user profile' src={renderUser.photo} /> */}
            <img className='rounded-full w-40 min-w-full' alt='user profile' src={user.photo} />
          </div>
          <div className='text-center text-base'>{user.firstname} {user.lastname}</div>
          <div className='text-center text-sm text-accent font-bold'>@{user.username}</div>
          <div className='text-center text-sm font-sans italic'>- {user.status}</div>
          <button className='mt-3 mb-2 text-center text-xs text-slate-300 border border-1 border-slate-300 pr-1 pl-1 rounded-full'>edit</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base  text-center hover:bg-accent text-black mt-5 rounded'
            type='submit' onClick={showAttending}>Attending</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black mt-5 rounded'
            type='submit' onClick={showHosting}>Hosting</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black  mt-5 rounded'
            type='submit' onClick={goBoardUp} >Board-ups</button>
          {/* </div> */}
    
        </div>
      </div>
     
      <div className="h-screen ">
         <NavBar/>
        <div className='text-lg text-accent ml-6'>{header}</div>
        <div className='h-3/4 w-full m-0 px-0 py-0 mt-0 mb-0 flex flex-row scrollbar-hide overflow-y-scroll'>
          {(!bus) ? (<div><BoardUpMAIN /></div>)
            : (header === 'Attending') ? (bus.length === 0) ? <div>NADA</div>
              : (bus.map((bu, index) =>
                <Strip key={index} value={bu} />)
                ) : (header === 'Hosting') ? (bus.length === 0) ? <div>NOTHING</div>
                  : (bus.map((bu, index) =>
                     <Strip key={index} value={bu} />)
                    ) : <div><BoardUpMAIN/></div>
            }
            
{/*             
            // (bus.length === 0) ? <div>NADA</div>
            //   : (
            //     bus.map((bu, index) =>
            //       <Strip key={index} value={bu} />)
            //     )} */}
        </div>
      </div>
      
    </div>
  );
}