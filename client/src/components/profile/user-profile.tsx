import React, { useContext, useEffect, useState } from 'react';
import Boardups from '../boardups/boardup-list';
import { NavBar } from '../NavBar';
import { UserContext } from '../../user-context';
import { User } from '../../models/user';

import { BoardupListType } from '../boardups/boardup-list';

const message = 'Looking for a match? Join a boardup';
export function UserProfile() {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState<User>();
  const [boardupListType, setBoardupListType] = useState<BoardupListType>(
    BoardupListType.ALL
  );
  const [header, setHeader] = useState(message);

  useEffect(() => {
    if (userContext.user) {
      setUser(userContext.user);
    }
  }, []);

  const RenderDashboard: React.FC = () => {
    switch (boardupListType) {
      case BoardupListType.ATTENDING: {
        return (
          <Boardups ids={user?.attendingBoardups} type={boardupListType} />
        );
      }
      case BoardupListType.HOSTING: {
        return <Boardups ids={user?.hostingBoardups} type={boardupListType} />;
      }
      case BoardupListType.ALL: {
        return <Boardups ids={[]} type={boardupListType} />;
      }
    }
  };

  return (
    <div className="flex flex-row text-slate-300 text-3xl font-mono flex border-0 m-2 overscroll-none">
      <div className="h-screen basis-2/5 text-slate-300 border-solid border-r-2 border-accent">
        <div className="mt-6 flex flex-col items-center">
          <div className="flex flex-row">
            <img
              src="./../../logo.png"
              className="cursor-pointer pr-4 h-10 cursor-pointer"
              alt="click to redirect to board-ups"
              onClick={() => {
                setBoardupListType(BoardupListType.ALL);
                setHeader('BOARDUPS');
              }}
            ></img>
            <div className="pt-2 text-accent text-xl font-mono font-medium">
              boardup
            </div>
          </div>
          <div className="flex mt-8 mb-1">
            <img
              className="rounded-full w-40 min-w-full"
              alt="user profile"
              src="https://boring-avatars-api.vercel.app/api/avatar?size=40&variant=pixel"
            />
          </div>
          <div className="text-center text-base text-accent font-bold">
            @{user?.username}
          </div>
          <button className="mt-3 mb-2 text-center text-xs text-slate-300 border border-1 border-slate-300 pr-1 pl-1 rounded-full">
            edit
          </button>
          <button
            className="bg-slate-300 w-48 pb-3 pt-3 text-base  text-center hover:bg-accent text-black mt-5 rounded"
            type="submit"
            onClick={() => {
              setBoardupListType(BoardupListType.ATTENDING);
              setHeader('ATTENDING');
            }}
          >
            Attending
          </button>
          <button
            className="bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black mt-5 rounded"
            type="submit"
            onClick={() => {
              setBoardupListType(BoardupListType.HOSTING);
              setHeader('HOSTING');
            }}
          >
            Hosting
          </button>
          <button
            className="bg-slate-300 w-48 pb-3 pt-3 text-base text-center hover:bg-accent text-black  mt-5 rounded"
            type="submit"
            onClick={() => {
              setBoardupListType(BoardupListType.ALL);
              setHeader('BOARDUPS');
            }}
          >
            boardups
          </button>
        </div>
      </div>

      <div className="h-screen flex flex-col w-full">
        <div className="text-xl text-accent ml-6 mt-2">
          <span className="border-black rounded bg-zinc-900 pl-2 pr-2 pb-4">
            {header}
          </span>
        </div>
        <NavBar />
        <div className="h-3/4 min-w-fit w-1/2 flex-none flex-col self-center scrollbar-hide overflow-y-scroll">
          <RenderDashboard />
        </div>
      </div>
    </div>
  );
}
