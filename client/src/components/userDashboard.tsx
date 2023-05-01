import React, { useEffect, useState } from 'react';
import { fetchUser } from '../services/apiService';
import { USER } from '../types/types'
import Boardups from './Boardups';
import { NavBar } from './NavBar';

const message = 'Looking for a match? Join a boardup'

export enum DashboardState {
  ATTENDING,
  HOSTING,
  BOARDUPS
}

export function UserDash() {

  const [dashboardState, setDashboardState] = useState<DashboardState>(DashboardState.BOARDUPS)
  const [user, setUser] = useState<USER | undefined>(undefined);
  const [header, setHeader] = useState(message);

  useEffect(() => {
    const username = 'TNT';
    async function userData(username: string) {
      const user = await fetchUser(username);
      console.log(user)
      return setUser(user)
    }
    userData(username)
  }, []);

  const RenderDashboard: React.FC = () => {
    switch (dashboardState) {
      // case DashboardState.HOSTING: {
      //   // return <Boardups boardups={[5, 6, 7, 8]} action='Delete' />
      //   return <Boardups boardups={data.filter(bu => {
      //     if (user?.hostingBoardups.includes(bu._id)) return bu
      //   })} action='Delete' />
      // }
      case DashboardState.ATTENDING: {
        return <Boardups ids={user?.attendingBoardups} action={dashboardState} />
      }
      case DashboardState.HOSTING: {
        return <Boardups ids={user?.hostingBoardups} action={dashboardState} />
      }
      case DashboardState.BOARDUPS: {
        return <Boardups ids={[]} action={dashboardState} />
      }
      default:
        return <Boardups ids={[]} action={DashboardState.BOARDUPS} />
    }
  }

  return (
    <div className='flex flex-row text-slate-300 text-3xl font-mono flex border-0 m-2 overscroll-none'>

      <div className='h-screen basis-2/5 text-slate-300 border-solid border-r-2 border-accent'>
        <div className='mt-6 flex flex-col items-center'>
          <div className='flex flex-row' >
            <img src='./../../logo.png' className='cursor-pointer pr-4 h-10 cursor-pointer' alt='click to redirect to board-ups'
              onClick={() => {setDashboardState(DashboardState.BOARDUPS); setHeader('BOARDUPS')}}
            ></img>
            <div className='pt-2 text-accent text-xl font-mono font-medium'>
              boardup
            </div>
          </div>
          <div className='flex mt-8 mb-1'>
            <img className='rounded-full w-40 min-w-full' alt='user profile' src={user?.photo} />
          </div>
          <div className='text-center text-base'>{user?.firstname} {user?.lastname}</div>
          <div className='text-center text-base text-accent font-bold'>@{user?.username}</div>
          <div className='text-center text-sm font-sans italic'>- {user?.status}</div>
          <button className='mt-3 mb-2 text-center text-xs text-slate-300 border border-1 border-slate-300 pr-1 pl-1 rounded-full'>edit</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base  text-center hover:bg-accent text-black mt-5 rounded'
            type='submit'
            onClick={() => {setDashboardState(DashboardState.ATTENDING); setHeader('ATTENDING')}}
          >Attending</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black mt-5 rounded'
            type='submit'
            onClick={() => {setDashboardState(DashboardState.HOSTING); setHeader('HOSTING')}}
          >Hosting</button>
          <button className='bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black  mt-5 rounded'
            type='submit'
            onClick={() => {setDashboardState(DashboardState.BOARDUPS); setHeader('BOARDUPS')}}
          >boardups</button>

        </div>
      </div>

      <div className="h-screen flex flex-col w-full">
        <div className='text-xl text-accent ml-6 mt-2'><span className='border-black rounded bg-zinc-900 pl-2 pr-2 pb-4'>{header}</span></div>
        <NavBar />
        <div className='h-3/4 min-w-fit w-1/2 flex-none flex-col self-center scrollbar-hide overflow-y-scroll'>
          <RenderDashboard />
        </div>
      </div>

    </div>
  );
}