
import { useNavigate } from "react-router-dom"

export function NavBar() {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/new-board-up');
  }

  function goHome() {
    navigate('/');
  }  

  return (<div className='sticky fixed flex justify-around bg-black w-full'>
            <div className='cursor-pointer flex-1'>
              <img src='./../../logo.png' className='pl-10 pr-10 h-10 cursor-pointer' alt='logo'
              onClick={goHome}></img>
            </div> 
            <div className='flex-1 text-center text-accent font-mono font-bold pt-1 pb-1'>
              Looking for a match? Join a board-up!
            </div>
            <div className="flex-1">
              <button className='bg-accent hover:bg-black text-xs text-cyan-800 font-bold font-mono py-1 px-1 ml-60 mr-2 rounded-full'
              type='submit' onClick={handleClick}>Create Board-Up</button>
            </div>
          </div>)
}