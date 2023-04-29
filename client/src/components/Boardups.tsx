import './Boardups.css'
import { SewingPinIcon, CalendarIcon, StopwatchIcon, Share1Icon, PlusCircledIcon, MinusCircledIcon } from '@radix-ui/react-icons'
import { boardupsProps } from '../types/types'

export default function Boardups({boardups, action}: boardupsProps): JSX.Element {

  return (
    <div className='boardupsContainer'>
      <div className='boardupsList'>
        {
          boardups.map(n => (
            <div key={n} className='boardup'>
              <h1>Title - {n} </h1>
              <div className='main'>
                <div className='img'></div>
                <div className='info'>
                  <CalendarIcon className='float-left text-accent mt-2'/>
                  <p>Date</p>
                  <StopwatchIcon className='float-left text-accent mt-2' />
                  <p>Time</p>
                  <SewingPinIcon className='float-left text-accent mt-2' />
                  <p>Location</p>

                  <div className='buttons'>
                    <button>
                      {(action === 'Delete' || action === 'Leave') ? <MinusCircledIcon /> : <PlusCircledIcon />}
                      <p>{action}</p>
                    </button>
                    <button>
                      {<Share1Icon />}
                      <p>Share</p>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
