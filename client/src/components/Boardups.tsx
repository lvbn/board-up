import './Boardups.css'
import { SewingPinIcon, CalendarIcon, StopwatchIcon, Share1Icon, PlusCircledIcon, MinusCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import { DashboardState } from './userDashboard'
import { useEffect, useState } from 'react'
import { fetchAllBoardUps } from '../services/apiService'
import { Boardup } from '../types/types'

type props = {
  ids: string[] | undefined,
  action: DashboardState
}


// ids: string[], dashboardState: DashboardState
export default function Boardups({ ids, action }: props): JSX.Element {

  const [boards, setBoards] = useState<Boardup[] | []>([])

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


  async function fetchData(ids: string[]) {
    const bus = await fetchAllBoardUps();
    setBoards(bus ?? [])
  }


  useEffect(() => {
    switch (action) {
      case 0:
        fetchData(ids ?? [])
        break;

      case 1:
        fetchData(ids ?? [])
        break;

      case 2:
        fetchData(ids ?? [])
        break;
      default:
        console.log(`Sorry, we are out of ${action}.`);
    }
  }, [action, ids])

  const actionButton = () => {
    {/*
        if user._id is in attending ids, then show leave
        if user._id is not in attending ids, and not the host show join
        if user._id is the host show delete
    */}
    if (action === 0) return <button><MinusCircledIcon /><p>leave</p></button>
    if (action === 1) return <button><CrossCircledIcon /><p>delete</p></button>
    if (action === 2) return <button><PlusCircledIcon /><p>leave</p></button>
  }

  return (
    <div className='boardupsList'>
      {
        boards?.map(b => (
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
                  {actionButton()}
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
  )
}
