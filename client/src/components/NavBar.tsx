
import { useNavigate } from "react-router-dom"

export function NavBar() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/new-board-up');
  }

  function goHome() {
    navigate('/');
  }

  return (<nav className='sticky fixed flex justify-end bg-black w-full'>
            <div className='cursor-pointer'>
              <img src='./../../logo.png' className='pl-10 pr-10 h-12 cursor-pointer' alt='click logo to redirect to homepage'
              onClick={goHome}></img>
            </div>
              <button className='bg-accent self-center hover:bg-slate-300 text-sm text-black font-bold font-mono w-20 pb-0.5 pt-0.5 mr-2 ml-0 mr-5 rounded'
              type='submit' onClick={handleClick}>Create boardup</button>
          </nav>)
}