import React, { useEffect, useState } from 'react';

export function Demo() {
  
  return <div className="flex flex-col text-center font-nintendo text-accent text-2xl" >
    <div className='mt-12'></div>
    <div className='text-accent text-3xl mb-4'>Tech Stack</div>
    <div className='border-2 mb-4 pt-4 pb-4 bg-zinc-900 w-1/5 self-center'> Back End
    <ul className='text-base text-slate-300 mt-4'>
      <li>MongoDB</li>
      <li>mongoose</li>
      <li>koa</li>
    </ul>
    </div>
    <div className='border-2 pt-4 pb-4 bg-zinc-900 w-1/5 self-center'> Front End
    <ul className='text-base text-slate-300 mt-4'>
      <li>React</li>
      <li>Tailwind</li>
      <li>Radix UI</li>
    </ul>
    </div>
      <iframe title='friends' src="https://embed.lottiefiles.com/animation/45740"></iframe>
 </div>
}