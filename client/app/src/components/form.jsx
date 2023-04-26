import React, { useEffect, useState } from 'react';
import { RocketIcon} from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import { postBoardUp } from '../services/apiService';
import { searchGame } from '../services/xlmService';
import { GAMES as mockGames } from '../services/mockGames';

export function Form() {
  // const [gameID, setGameID] = useState('');
  const [game, setGame] = useState('');
  const [level, setLevel] = useState('');
  const [players, setPlayers] = useState(0);
  const [date, setDate] = useState('');
  const [location, setlocation] = useState('');
  const [details, setDet] = useState('');
  const [email, setEmail] = useState('');
  const [games, setGames] = useState([]);


//Redirecting
  const nav = useNavigate();

  function goHome() {
    nav('/');
  }

//Request to post the form to the BE
  async function post(obj) {
    const res = await postBoardUp(obj);
    return res
  }

 //Initialise
  useEffect(() => {
      setGames(mockGames); //mock data instead of external API
  }, []);

//   const searchgame = 'risk';
// //Search in board game geek database
//   async function search(searchgame) {
//     const result = await searchGame(searchgame);
//     // console.log(result)
//     return
//   }
//   search(searchgame);

  function handleSubmit(event) {
// event.preventDefault();
  post({ game, level, players, location, date, details, email })  
  alert('Submitted !')
//Clears inputs
  // setGameID('');
  setGame('');
  setLevel('');
  setPlayers(0);
  setlocation('');
  setDate('');
  setDet('');
  setEmail('');
}

  
function gameHandler (event){
  // setGameID(event.target.value)
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

      <div className='bg-black text-base'>
          <div className='grid justify-items-center bg-black pb-5 pt-5 top-0 z-50 cursor-pointer'>
            <img src='./../../logo.png' className='h-16' alt='click logo to redirect to homepage'
            onClick={goHome}></img>
          <br/>
          <p>Create a boardup invite!</p>
          </div> 
        <form className="text-accent m-2" onSubmit={handleSubmit}>

          <div className='mb-2'> 
            <label>Game:  </label>
              <select size='' className='bg-black text-slate-300 border rounded-md' name='game' onChange={gameHandler} required>
                <option className='' value=''>search game ...</option>
              {games.map((ele) => 
                  //Storing the entire element (game) in the value, to be able to store add info in DB
              { 
                return <option key={ele.gameID} value={ele.gameName}>{ele.gameName}</option>
              }
              )}
              </select>
          </div>

          <div className='mb-2'> 
            <label>Level:  </label>
              <select className='bg-black text-slate-300 border rounded-md' name='level' onChange={levelHandler} required>
                <option value="">select level</option>
                <option value="Rookies">Rookies</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert players only">Expert players only</option>
                <option value="All level are welcome!">All levels are welcome!</option>
              </select>
          </div>
          <div className='mb-2'> 
            <label>How many players are you looking for? </label>
            <br/>
            <input type='number' min='1' max='10' value={players} name='players'
            className='bg-black text-slate-300 border rounded-md' onChange={playerHandler} required />
          </div>
          <br />
          
          <label>Location:  </label>  
          <div className='flex flex-row mb-2'> 
            <textarea rows='3' cols='40' style={{resize:'none'}} value={location} name='location' placeholder=" address or venue.."
              className='bg-black text-slate-300 border rounded-md' onChange={locationHandler} required >
            </textarea>
          </div>
          <div className='mb-2'> 
            <label>Date & Time:  </label>
            <input type='datetime-local' name='date' value={date}
            className='bg-black text-slate-300 border rounded-md dark:text-slate-300 dark:[color-scheme:dark]' onChange={dateHandler} required />
          </div>
          <br/>
          <label>Details:  </label>
          <div className='mb-2'>  
            <textarea rows='3' cols='40' style={{resize:'none'}} value={details} name='details' placeholder=" Tell us more :)"
              className='bg-black text-slate-300 border rounded-md' onChange={detHandler} required>
            </textarea>
          </div>
          <div className='mb-2'> 
            <label>Your email:  </label>
            <input type='text' size='29' value={email} name='location' placeholder=" dungeons@dragons.dnd"
            className='bg-black text-slate-300 border rounded-md' onChange={emailHandler} required />
          </div>
          <br />
          <div className='grid justify-items-end'>
            <button className='bg-accent hover:bg-slate-300 text-sm text-black font-bold font-mono py-1 px-1 rounded mt-2'><RocketIcon/>Send</button>
          </div>
        </form>
      </div>
   
    </div>
  )

}