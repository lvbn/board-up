import './Boardups.css'
import { SewingPinIcon, CalendarIcon, StopwatchIcon, Share1Icon, PlusCircledIcon, MinusCircledIcon } from '@radix-ui/react-icons'
import { BOARDUP_PROPS } from '../types/types'

export default function Boardups({boardups, action}: BOARDUP_PROPS): JSX.Element {

  return (
    <div className='boardupsContainer'>
      <div className='boardupsList'>
        {
          boardups?.map(b => (
            <div key={b._id} className='boardup'>
              <h1>{b.title} </h1>
              <div className='main'>
                <div className='img'></div>
                <div className='info'>
                  <CalendarIcon className='float-left text-accent mt-2'/>
                  <p>{b.datetime}</p>
                  <StopwatchIcon className='float-left text-accent mt-2' />
                  <p>{b.datetime}</p>
                  <SewingPinIcon className='float-left text-accent mt-2' />
                  <p>{b.location}</p>

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
