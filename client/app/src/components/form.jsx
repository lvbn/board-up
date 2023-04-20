import React, { useEffect, useState } from 'react';
import { RocketIcon} from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

export function Form() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [num, setNum] = useState('');
  const [details, setDet] = useState('');
  const [email, setEmail] = useState('');

  const nav = useNavigate();

  function goHome() {
    nav('/');
  }

function handleSubmit(event) {

    // fetchPost(URL, { title, date, venue })
    alert('Submitted !')

    setTitle('');
    setDate('');
    setVenue('');
}

  
function titleHandler (event){
       setTitle(event.target.value)
} 
function dateHandler (event){
       setDate(event.target.value)
  } 
function venueHandler (event){
       setVenue(event.target.value)
} 
function playerHandler (event){
       setNum(event.target.value)
} 
function detHandler (event){
       setDet(event.target.value)
} 
function emailHandler (event){
       setEmail(event.target.value)
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
            <input type='text' size='35' value={title} name='title' placeholder="Dungeons and dragons.."
              className='bg-black text-slate-400' onChange={titleHandler} required />
          </div>
          <div className='mb-2'> 
            <label>Level:  </label>
              <select className='bg-black text-slate-400' name='level'>
                <option value="beginners">Rookies</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert players only</option>
                <option value="all levels">All levels are welcome!</option>
              </select>
          </div>
          <div className='mb-2'> 
            <label>How many players are you looking for? </label>
            <br/>
            <input type='number' min='1' max='10' value={num} name='players'
            className='bg-slate-300 text-black' onChange={playerHandler} required />
          </div>
          <br />
          
          <div className='mb-2'> 
            <label>Date & Time:  </label>
            <input type='datetime-local' name='date' value={date}
            className='bg-slate-300 text-black' onChange={dateHandler} required />
          </div>
          <div className='flex flex-row mb-2'> 

            <label>Location: </label>  
            <input type='text' value={venue} name='venue' placeholder="address or venue.."
            className='bg-black text-slate-400' onChange={venueHandler} required />
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
            <input type='text' value={email} name='venue' placeholder="dungeons@dragons.dnd"
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