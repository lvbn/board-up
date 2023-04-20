import React, { useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useNavigate } from 'react-router-dom';
import { TriangleDownIcon, PersonIcon, SewingPinIcon, CalendarIcon} from '@radix-ui/react-icons'

export function BoardUp({ bu }) {
  
  const nav = useNavigate();

  function goLogIn() {    
    nav('/login');
  }
  
    return (
      <div className='flex flex-row border-4 border-cyan-800 px-4 pt-2 pb-2 text-sm font-mono m-1 w-96'>
        {/* <div className='text-slate-300'>id: {bu._id}</div> */}
        <div className='flex flex-row'>
          <div className='w-64 text-slate-300'>
            <div className='text-accent font-sans font-bold text-lg pb-2'>{bu.game}</div>
            <CalendarIcon className='float-left text-cyan-800'/>
            <span className='px-4'>{bu.date}</span><br/>
            <SewingPinIcon className='float-left text-cyan-800' />
             <span className='px-4'>{bu.location} </span><br/>
             <div className='text-slate-300'>
                <Accordion.Root type='multiple' >
                <Accordion.Item className='pt-1 pb-1 pl-8' value={bu._id}> more info  
                  <Accordion.Trigger><TriangleDownIcon className='text-cyan-800'/></Accordion.Trigger>
                  <Accordion.Content className='pt-1 w-full'>
                    <PersonIcon className='float-left text-cyan-800'/>
                    <PersonIcon className='text-cyan-800'/>
                    <div className='pt-2'>players: {bu.players} </div>
                    <div>level: {bu.level}</div>
                    <div>{bu.details}</div> 
                    <br /><img alt='example'src='https://cf.geekdo-images.com/3AcPY2v96M81_r3jErHR-g__original/img/fy7R15jdM8X_SJcvjNoCwCY_mDc=/0x0/filters:format(jpeg)/pic326796.jpg'/>
                  </Accordion.Content>
                </Accordion.Item>
                </Accordion.Root> 
              </div>
          </div>
        </div>
        <div className='pt-1 pl-16'>
          <div className='text-accent font-bold font-mono pb-2'>Join</div>
          <button className="bg-cyan-800 hover:bg-accent text-slate-300 font-bold font-mono py-1 px-2 rounded-full"
            type='submit' onClick={goLogIn}><PersonIcon/></button>
        </div>
      </div>
  );
}