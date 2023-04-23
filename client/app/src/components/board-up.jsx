import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import * as Accordion from '@radix-ui/react-accordion';
import { useNavigate } from 'react-router-dom';
import { TriangleDownIcon, PersonIcon, SewingPinIcon, CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'
import { GAMES } from './../services/mockGames.js'


export function BoardUp({ bu }) {
  console.log(bu)

  // const game = GAMES.find((ele) => ele.gameName === bu.game)
  // console.log(game.image)

  const nav = useNavigate();

  function goLogIn() {    
    nav('/login');
  }

  //Format date
  const formatDate = new Date(bu.date).toString();
  const day = formatDate.slice(0,16);
  const time = formatDate.slice(16,21);
  
    return (
      <div className='flex flex-row border-4 border-slate-300 rounded-lg px-4 pt-2 pb-2 text-xs font-sans m-1'>
        {/* <div className='text-slate-300'>id: {bu._id}</div> */}
        <div className='flex w-5/6 flex-row'>
          <div className='text-xl text-slate-300'>
            <div className='text-accent font-sans font-bold text-xl pb-2'>{bu.game}</div>
            {/* <img className='cursor-pointer border-0 rounded-xl' alt='example' src={game.image} /> */}
            <br/>
            <CalendarIcon className='float-left text-accent'/>
            <span className='px-4'>{day}</span><br />
            <StopwatchIcon className='float-left text-accent' />
            <span className='px-4'>{time}</span><br />
            <SewingPinIcon className='float-left text-accent' />
             <span className='px-4'>{bu.location} </span><br/>
             <div className='text-slate-300'>
                <Accordion.Root type='multiple' >
                <Accordion.Item className='pt-1 pb-1 pl-8 text-sm' value={bu._id}> More info
                  <Accordion.Trigger><TriangleDownIcon className='text-accent'/></Accordion.Trigger>
                  <Accordion.Content className='pt-1 w-full text-xl'>
                    <br/>
                    <PersonIcon className='float-left text-accent'/>
                    <PersonIcon className='text-accent'/>
                    <div className='pt-2'><span className='text-accent'>players:</span> {bu.players} </div>
                    <div><span className='text-accent'>level:</span>  {bu.level}</div>
                    <br/>
                    <div><span className='text-accent'>host message:</span> <br/><br/>{bu.details}</div> <br/>
                    {/* <iframe title='video' src='https://www.youtube.com/embed?v=aAC-9HtA03w&ab_channel=FANTASIABoardgames'></iframe> */}
                    {/* <br /><img className='cursor-pointer' alt='example' src={game.image}/> */}
                  </Accordion.Content>
                </Accordion.Item>
                </Accordion.Root> 
              </div>
          </div>
        </div>
        <div className='pl-12'>
          <div className='text-accent font-bold font-mono pb-2'></div>
          <button className="bg-accent text-black hover:bg-slate-300 font-bold font-mono w-10 pt-1 px-1 mt-8 rounded"
            type='submit' onClick={goLogIn}><PersonIcon/>Join</button>
        </div>
      </div>
  );
}