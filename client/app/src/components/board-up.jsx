import React, { useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { TriangleDownIcon, TransparencyGridIcon, SewingPinIcon, CalendarIcon} from '@radix-ui/react-icons'

export function BoardUp({bu}) {
  
    return (
      <div className='flex flex-row border-4 border-cyan-800 px-4 pt-2 pb-2 text-sm m-1 w-96'>
        {/* <div className='text-slate-300'>id: {bu._id}</div> */}
        {/* <div>Game: {bu.gameName}</div>
        <div>location: {bu.location}</div> */}
        <div className='flex flex-row'>
          <div className='w-64 text-cyan-800'>
            <span className='text-accent font-sans font-bold text-lg'>{bu.gameName}</span> <br/>
            <CalendarIcon className='float-left'/>
            <span>{bu.date}</span><br/>
            <SewingPinIcon className='float-left' />
             <span>{bu.location} </span><br/>
             <div className='text-cyan-800'>
                <Accordion.Root type='multiple' >
                <Accordion.Item value={bu._id}> tell me more!  
                  <Accordion.Trigger className='bg-blue'><TriangleDownIcon/></Accordion.Trigger>
                  <Accordion.Content className='pt-1 w-full rounded-b-lg 
                  px-4 pb-3 bg-slate-800'>
                    <br /> Game level: {bu.gameLevel}
                    <br /> Players: {bu.maxNoOfParticipants} 
                    <br /><img alt='example'src='https://cf.geekdo-images.com/3AcPY2v96M81_r3jErHR-g__original/img/fy7R15jdM8X_SJcvjNoCwCY_mDc=/0x0/filters:format(jpeg)/pic326796.jpg'/>
                    <br /> {bu.details}
                  </Accordion.Content>
                </Accordion.Item>
                </Accordion.Root> 
              </div>
          </div>
        </div>
        <div className='text-cyan-800 font-bold'> Join
          <button className="bg-accent hover:bg-slate-300 text-cyan-800 font-bold font-mono py-1 px-2 rounded-full"
            type='submit'><TransparencyGridIcon/></button>
        </div>
      </div>
  );
}