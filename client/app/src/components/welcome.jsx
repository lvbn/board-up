import './../index.css'
import { useNavigate } from "react-router-dom"

export function Welcome() {
  
  const navigate = useNavigate();

  function handleClick() {
    navigate('/board-ups');
  }

  return <div className="bg-black mt-20 grid justify-items-center content-center">
    <div>
      <img src='./../../logo.png' className='h-48' alt='logo'
      onClick={handleClick}></img>
    </div> 
  </div>
}