
import { useNavigate } from "react-router-dom"

export function NavBar() {
  
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/new-board-up');
  }

  function goHome() {
    navigate('/');
  }  

  return (<div className='sticky fixed flex justify-between bg-black w-full pt-2'>
            <div className='cursor-pointer'>
              <img src='./../../logo.png' className='pl-10 pr-10 h-12 cursor-pointer' alt='logo'
              onClick={goHome}></img>
            </div> 
            <div className='text-center text-accent text-xl font-mono font-bold pt-1 pb-1 mr-10'>
             Looking for a match? Join a board-up!
            </div>
            <div>
              <button className='bg-accent hover:bg-slate-300 text-xs text-black font-bold font-mono w-16 px-1 py-1 mr-2 ml-0 mr-5 rounded'
              type='submit' onClick={handleClick}>Create Board-Up</button>
            </div>
          </div>)
}