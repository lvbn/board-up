import './Boardups.css'
import { SewingPinIcon, CalendarIcon, StopwatchIcon, Share1Icon, PlusCircledIcon, MinusCircledIcon } from '@radix-ui/react-icons'
import { BOARDUP_PROPS } from '../types/types'
import { useEffect } from 'react'

// ids: string[], dashboardState: DashboardState
export default function Boardups({ boardups, action }: BOARDUP_PROPS): JSX.Element {
  // const [boards, setBoards] = useState([])

  //   useEffect(() => {
  //     switch (dashboardState) {
  //       case DashboardState.ATTENDING: {
  // // Fetch from ids
  //       }
  //       case DashboardState.HOSTING: {
  //         // Fetch from ids
  //               }
  //               case DashboardState.BOARDUPS: {
  //                 // Fetch all boards except the ones create by user => {exclude: user._id}
  //                       }
  //     }
  //   })

  // All boardups have an attending property that lists the users that will be attending the game
  // {_id: string, username: string}[]


  // useEffect(() => {
  //   switch (dashboardState) {
  //     case 'Oranges':
  //       console.log('Oranges are $0.59 a pound.');
  //       break;
  //     case 'Mangoes':
  //     case 'Papayas':
  //       console.log('Mangoes and papayas are $2.79 a pound.');
  //       // Expected output: "Mangoes and papayas are $2.79 a pound."
  //       break;
  //     default:
  //       console.log(`Sorry, we are out of ${expr}.`);
  //   }
  // }, [])

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
                  <CalendarIcon className='float-left text-accent mt-2' />
                  <p>{b.datetime}</p>
                  <StopwatchIcon className='float-left text-accent mt-2' />
                  <p>{b.datetime}</p>
                  <SewingPinIcon className='float-left text-accent mt-2' />
                  <p>{b.location}</p>

                  <div className='buttons'>
                    <button>
                      {/*
                          if user._id is in attending ids, then show leave
                          if user._id is not in attending ids, and not the host show join
                          if user._id is the host show delete
                      */}
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
