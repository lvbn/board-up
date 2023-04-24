import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import * as Accordion from '@radix-ui/react-accordion';
import { useNavigate } from 'react-router-dom';
import { TriangleDownIcon, PersonIcon, CheckIcon, PlusIcon, SewingPinIcon, CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'
import { GAMES } from './../services/mockGames'


export function BoardUp({ bu }) {
  const [game, setGame] = useState('');
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
 

  useEffect(() => {
    const res = GAMES.find((ele) => ele.gameName === bu.game)
    setGame(res)
  }, [bu.game])
 
  //  console.log(game.image)
  // console.log(game.image)

  const nav = useNavigate();

  function goLogIn() {    
    nav('/login');
  }
  
  function clicked() {
    setClick(true);
  }
  //Format date
  const formatDate = new Date(bu.date).toString();
  const day = formatDate.slice(0,16);
  const time = formatDate.slice(16,21);
  
    return (
      <div className='flex flex-col border-4 border-slate-300 rounded-lg px-4 pt-2 pb-2 text-xs font-sans m-1'>
        <div className='text-accent font-mono font-bold text-2xl pb-2 ml-4 mb-2 mt-1'>{bu.game}</div>
        <div className='flex flex-row mind'>
          <div className='w-2/5 ml-4'>
              {
                ((game) ? <img className='h-40 w-40 mb-2 cursor-pointer border-0 rounded-xl' alt='board game' src={game.image} />
                : <div></div> )
            }
          </div>
          <div className='w-3/5 ml-2 text-xl text-slate-300'>
            <div>
            <CalendarIcon className='float-left text-accent mt-2'/>
            <span className='px-4'>{day}</span><br />
            <StopwatchIcon className='float-left text-accent mt-2' />
            <span className='px-4'>{time}</span><br />
              <SewingPinIcon className='float-left text-accent mt-2' />
            <span className='px-4'>{bu.location} </span><br/>
            </div>
            <div className='flex justify-end'>
              { (button === false) ? null :
                (<button className="bg-accent text-black text-sm hover:bg-slate-300 font-bold font-mono w-10 pt-1 px-1 pr-4 mt-8 mr-4 rounded"
                type='submit' onClick={clicked}>
                {(click === false) ? (<><PlusIcon />Join</>) :
                  (<><CheckIcon /></>)}
              </button>)}
            </div>
          </div>          
        </div>
             <div className='text-slate-300'>
                <Accordion.Root type='multiple' >
                <Accordion.Item className='mb-2 ml-4 text-sm' value={bu._id}> More info
                  <Accordion.Trigger><TriangleDownIcon className='text-accent'/></Accordion.Trigger>
                  <Accordion.Content className='pt-1 w-full text-xl'>
                    <div><span className='text-accent'>host message:</span> <br/><br/>{bu.details}</div> <br/>
                    <PersonIcon className='float-left text-accent'/>
                    <PersonIcon className='text-accent' />
                    <div className='pt-2'>
                      <span className='text-accent'>players:</span> {bu.players}
                      <br/>
                      <span className='text-accent'>level:</span>  {bu.level}
                    </div>
                    <div></div>
                    <br/>
                  </Accordion.Content>
                </Accordion.Item>
                </Accordion.Root> 
              </div>
      </div>
  );
}