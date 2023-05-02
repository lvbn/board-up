import React, { useEffect, useState } from 'react';
import {
  SewingPinIcon,
  CalendarIcon,
  StopwatchIcon,
  Share1Icon,
  PlusCircledIcon,
  MinusCircledIcon,
  CrossCircledIcon,
} from '@radix-ui/react-icons';
import { Boardup } from '../../models/boardup';

import './boardup-list.css';
import {
  fetchAllBoards,
  fetchBoardsByIds,
} from '../../services/boardupService';

export enum BoardupListType {
  ATTENDING = 'attending',
  HOSTING = 'hosting',
  ALL = 'all',
}

const BoardupList: React.FC<{ ids?: string[]; type: BoardupListType }> = ({
  ids,
  type,
}) => {
  const [boardups, setBoardups] = useState<Boardup[]>([]);

  useEffect(() => {
    switch (type) {
      case BoardupListType.ATTENDING: {
        if (areIdsEmpty()) return;

        fetchByIds(ids!);
        break;
      }
      case BoardupListType.HOSTING: {
        if (areIdsEmpty()) return;

        fetchByIds(ids!);
        break;
      }
      case BoardupListType.ALL: {
        fetch();
        break;
      }
    }
  }, []);

  const fetchByIds = async (ids: string[]) => {
    const { boardups, error } = await fetchBoardsByIds(ids);

    if (error) {
      console.log('BoardupList error:', error);
    }

    if (boardups) {
      setBoardups(boardups);
    }
  };

  const fetch = async () => {
    const { boardups, error } = await fetchAllBoards();

    if (error) {
      console.log('BoardupList error:', error);
    }

    if (boardups) {
      setBoardups(boardups);
    }
  };

  const areIdsEmpty = (): boolean => {
    return ids ? ids.length === 0 : true;
  };

  return (
    <div className="boardupsList">
      {boardups.map((boardup) => {
        const date = new Date(Number(boardup.datetime));
        return (
          <div key={boardup._id} className="boardup">
            <h1>{boardup.game.name} </h1>
            <div className="main">
              <div className="img">
                <img src={boardup.game.mediaUrl} alt="Game Image" />
              </div>
              <div className="info">
                <CalendarIcon className="float-left text-accent mt-2" />
                <p>
                  {date.toLocaleDateString('en-gb', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <StopwatchIcon className="float-left text-accent mt-2" />
                <p>
                  {date.toLocaleTimeString('en-gb', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </p>
                <SewingPinIcon className="float-left text-accent mt-2" />
                <p>{boardup.location}</p>

                <div className="buttons">
                  {/* {actionButton()} */}
                  <button>
                    {<Share1Icon />}
                    <p>Share</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BoardupList;

// export default function Boardups({ ids, action }: props): JSX.Element {

//   const actionButton = () => {
//     {
//       /*
//         if user._id is in attending ids, then show leave
//         if user._id is not in attending ids, and not the host show join
//         if user._id is the host show delete
//     */
//     }
//     if (action === 0)
//       return (
//         <button>
//           <MinusCircledIcon />
//           <p>leave</p>
//         </button>
//       );
//     if (action === 1)
//       return (
//         <button>
//           <CrossCircledIcon />
//           <p>delete</p>
//         </button>
//       );
//     if (action === 2)
//       return (
//         <button>
//           <PlusCircledIcon />
//           <p>leave</p>
//         </button>
//       );
//   };

//   return (

//   );
// }
