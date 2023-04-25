import './../index.css'
import { useNavigate } from "react-router-dom"
import { CubeIcon, HeartIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export function Welcome() {
  
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }

  function goGit() {
    window.open('https://github.com/karoteblurs/board-up', "_blank", "noreferrer");
    return
  }

  function goGeek() {
    window.open('https://boardgamegeek.com/browse/boardgame',"_blank", "noreferrer") ;
    return
  }

  function goDemo() {
     navigate('/demo');
  }

  return <div className="bg-black mt-20 grid justify-items-center content-center">
    <div>
      <img src='./../../logo.png' className='h-48 cursor-pointer' alt='logo redirects to board-ups'
      onClick={handleClick}></img>
    </div> 
    <div className='text-accent text-6xl font-mono font-extrabold'>
      boardup
    </div>
    <br/>
    <br/>
    <footer className='text-slate-300 text-xs flex flex-row'>
      {/* <CubeIcon /> */}
      <br />
      {/* <div> */}
      <GitHubLogoIcon className='cursor-pointer ml-5' onClick={goGit} />
      <CubeIcon className='cursor-pointer ml-5' onClick={goGeek} />
      <HeartIcon className='cursor-pointer ml-5' onClick={goDemo}/>
    </footer>
  </div>
}