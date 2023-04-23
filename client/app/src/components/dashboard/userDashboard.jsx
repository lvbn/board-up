import { USERS } from './../../services/mockUser'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../services/apiService';
import { Strip } from './strip'

export function UserDash() {
  const [user, setUser] = useState({});
  const [bus, setBUS] = useState(null);

  const mockUser = 'TNT';
  
  const nav = useNavigate();

  function goBoardUp() {
    nav('/board-ups');
  }  
  
  //API Service
  async function userData(id, username) {
    const data = await fetchUser({ id }, username);
    // console.log(data)
    return data
  }

  ///Initialise
  useEffect(() => { //username provisional, this should work for all users
      // TNT Mongo
  // const ID = '644425d7749046fa1d46132f';
  // const username = 'TNT';
  
  const ID= '64442619749046fa1d461331';
  const username = 'cyberpunk';
  
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
    //fetch request for the event IDs
    return
  }


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
          <div className='flex mt-8 mb-1'>
            {/* <img className='rounded-full w-40 min-w-full' alt='user profile pic' src={renderUser.photo} /> */}
            <img className='rounded-full w-40 min-w-full' alt='user profile pic' src={user.photo} />
          </div>
          <div className='text-center text-base'>{user.firstname} {user.lastname}</div>
          <div className='text-center text-sm text-accent font-bold'>@{user.username}</div>
          <div className='text-center text-sm font-sans italic'>- {user.status}</div>
          <button className='mt-3 mb-2 text-center text-xs text-slate-300 border border-1 border-slate-300 pr-1 pl-1 rounded-full'>edit</button>
          {/* <div className='bg-slate-300 items-center'> */}
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black  mt-5 rounded'
            type='submit' onClick={goBoardUp} >Board-ups</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base  text-center hover:bg-accent text-black mt-5 rounded'
            type='submit' onClick={showAttending}>Attending</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black mt-5 rounded'
            type='submit'>Hosting</button>
          {/* </div> */}
    
        </div>
      </div>
      <div className=''>
        { (!bus) ? (<div></div>)
          : (bus.length === 0) ? <div>No Upcoming board ups</div>
            : (bus.map((bu, index) =>
            <Strip key={index} value={bu} />)
          )}
      </div>
    </div>
  );
}