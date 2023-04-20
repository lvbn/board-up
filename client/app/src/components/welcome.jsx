import './../index.css'
import { useNavigate } from "react-router-dom"
import { CubeIcon, HeartIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export function Welcome() {
  
  const navigate = useNavigate();

  function handleClick() {
    navigate('/board-ups');
  }

  function goGit() {
    window.location.href = 'https://github.com/karoteblurs/board-up';
    return
  }

  function goGeek() {
    window.location.href = 'https://boardgamegeek.com/browse/boardgame';
    return
  }

  return <div className="bg-black mt-20 grid justify-items-center content-center">
    <div>
      <img src='./../../logo.png' className='h-48 cursor-pointer' alt='logo'
      onClick={handleClick}></img>
    </div> 
    <div className='text-accent text-6xl font-mono font-extrabold'>
      boardup
    </div>
    <br/>
    <br/>
    <footer className='text-slate-800 text-xs flex flex-row'>
      {/* <CubeIcon /> */}
      <br />
      {/* <div> */}
      <GitHubLogoIcon className='cursor-pointer mr-5' onClick={goGit} />
      <CubeIcon className='cursor-pointer mr-5' onClick={goGeek} />
      <HeartIcon className='cursor-pointer mr-5' onClick={goGit}/>
    </footer>
  </div>
}