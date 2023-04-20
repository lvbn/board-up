import React, { useEffect, useState } from 'react';
import { RocketIcon} from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import { postBoardUp } from './../apiService';

export function Form() {
  const [game, setGame] = useState('');
  const [level, setLevel] = useState('');
  const [players, setPlayers] = useState(0);
  const [date, setDate] = useState('');
  const [location, setlocation] = useState('');
  const [details, setDet] = useState('');
  const [email, setEmail] = useState('');


//Redirecting
  const nav = useNavigate();

  function goHome() {
    nav('/');
  }

//Request to post the form to the BE
  async function post(obj) {
    const res = await postBoardUp(obj);
    // console.log(res)
    return res
  }

  console.log({ game, level, players, location, date, details, email })  

  function handleSubmit(event) {
    event.preventDefault();
  post({game, level, players, location, date, details, email })
  alert('Submitted !')
//Clears inputs
  setGame('');
  setLevel('');
  setPlayers(0);
  setlocation('');
  setDate('');
  setDet('');
  setEmail('');
}

  
function gameHandler (event){
       setGame(event.target.value)
} 
function dateHandler (event){
       setDate(event.target.value)
  } 
function locationHandler (event){
       setlocation(event.target.value)
} 
function playerHandler (event){
       setPlayers(event.target.value)
} 
function detHandler (event){
       setDet(event.target.value)
} 
function emailHandler (event){
       setEmail(event.target.value)
}
  function levelHandler(event) {
      setLevel(event.target.value)
}
  
  return (
    <div className='grid mt-2 justify-items-center text-accent text-xl font-mono'>

      <div className='bg-black text-sm'>
          <div className='grid justify-items-center bg-black pb-5 pt-5 top-0 z-50 cursor-pointer'>
            <img src='./../../logo.png' className='h-16' alt='logo'
            onClick={goHome}></img>
          <br/>
          <p>Create a board-up invite!</p>
          </div> 
        <form className="text-cyan-800 m-2" onSubmit={handleSubmit}>
          <div className='mb-2'> 
            <label>Game:  </label>
            <input type='text' size='35' value={game} name='game' placeholder="Dungeons and dragons.."
              className='bg-black text-slate-400' onChange={gameHandler} required />
          </div>
          <div className='mb-2'> 
            <label>Level:  </label>
              <select className='bg-black text-slate-400' name='level' onChange={levelHandler} required>
                <option value="">select level</option>
                <option value="beginners">Rookies</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert players only</option>
                <option value="all levels">All levels are welcome!</option>
              </select>
          </div>
          <div className='mb-2'> 
            <label>How many players are you looking for? </label>
            <br/>
            <input type='number' min='1' max='10' value={players} name='players'
            className='bg-slate-300 text-black' onChange={playerHandler} required />
          </div>
          <br />
          
          <label>Location:  </label>  
          <div className='flex flex-row mb-2'> 
            <textarea rows='3' cols='40' style={{resize:'none'}} value={location} name='location' placeholder=" address or venue.."
              className='bg-black text-slate-400' onChange={locationHandler} required >
            </textarea>
          </div>
          <div className='mb-2'> 
            <label>Date & Time:  </label>
            <input type='datetime-local' name='date' value={date}
            className='bg-slate-300 text-black' onChange={dateHandler} required />
          </div>
          <br/>
          <label>Details:  </label>
          <div className='mb-2'>  
            <textarea rows='3' cols='40' style={{resize:'none'}} value={details} name='details' placeholder="Tell us more :)"
              className='bg-black text-slate-400' onChange={detHandler} required>
            </textarea>
          </div>
          <div className='mb-2'> 
            <label>Your email:  </label>
            <input type='text' value={email} name='location' placeholder="dungeons@dragons.dnd"
            className='bg-black text-slate-400' onChange={emailHandler} required />
          </div>
          <br />
          <div className='grid justify-items-end'>Send
            <button className='bg-accent hover:bg-black text-cyan-800 text-base font-bold font-mono py-1 px-1 rounded-full mt-2'><RocketIcon/></button>
          </div>
        </form>
      </div>
   
    </div>
  )

}