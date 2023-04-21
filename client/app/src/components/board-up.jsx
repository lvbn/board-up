import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import * as Accordion from '@radix-ui/react-accordion';
import { useNavigate } from 'react-router-dom';
import { TriangleDownIcon, PersonIcon, SewingPinIcon, CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'


export function BoardUp({ bu }) {
  console.log(bu)
  const nav = useNavigate();

  function goLogIn() {    
    nav('/login');
  }

  //Format date
  const formatDate = new Date(bu.date).toString();
  const day = formatDate.slice(0,16);
  const time = formatDate.slice(16,21);
  
    return (
      <div className='flex flex-row border-4 border-slate-300 px-4 pt-2 pb-2 text-sm font-mono m-1 w-96'>
        {/* <div className='text-slate-300'>id: {bu._id}</div> */}
        <div className='flex flex-row'>
          <div className='w-64 text-slate-300'>
            <div className='text-accent font-sans font-bold text-lg pb-2'>{bu.game}</div>
            <CalendarIcon className='float-left text-cyan-400'/>
            <span className='px-4'>{day}{time}</span><br />
            <StopwatchIcon className='float-left text-cyan-400' />
            <span className='px-4'>{time}</span><br />
            <SewingPinIcon className='float-left text-cyan-400' />
             <span className='px-4'>{bu.location} </span><br/>
             <div className='text-slate-300'>
                <Accordion.Root type='multiple' >
                <Accordion.Item className='pt-1 pb-1 pl-8' value={bu._id}> more info  
                  <Accordion.Trigger><TriangleDownIcon className='text-cyan-400'/></Accordion.Trigger>
                  <Accordion.Content className='pt-1 w-full'>
                    <PersonIcon className='float-left text-cyan-400'/>
                    <PersonIcon className='text-cyan-400'/>
                    <div className='pt-2'>players: {bu.players} </div>
                    <div>level: {bu.level}</div>
                    <div>{bu.details}</div> 
                    {/* <iframe title='video' src='https://www.youtube.com/embed?v=aAC-9HtA03w&ab_channel=FANTASIABoardgames'></iframe> */}
                    <br /><img className='cursor-pointer' alt='example'src='https://cf.geekdo-images.com/ufkAbhulnKJ7uDpi09TXOQ__imagepage/img/WDeHCU6YnWFMNYHcaxAor53Qh1Q=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7127448.jpg'/>
                  </Accordion.Content>
                </Accordion.Item>
                </Accordion.Root> 
              </div>
          </div>
        </div>
        <div className='pl-12'>
          <div className='text-accent font-bold font-mono pb-2'></div>
          <button className="bg-accent text-black hover:bg-slate-300 font-bold font-mono w-10 pt-1 px-1 rounded"
            type='submit' onClick={goLogIn}><PersonIcon/>Join</button>
        </div>
      </div>
  );
}