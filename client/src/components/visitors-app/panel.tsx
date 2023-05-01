import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';

import { signin } from '../../services/authService';

export function Panel() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //Redirecting
  const nav = useNavigate();

  const handleSignin = () => {
    console.log(username, password);
  };

  return (
    <div className="flex justify-center text-slate-300 text-xl">
      <Tabs.Root className="mt-10" defaultValue="tab1">
        <Tabs.List className="text-center" aria-label="Manage your account">
          <Tabs.Trigger
            className="border border-1 border-accent rounded text-accent px-5 py-2 text-3xl font-mono font-bold"
            value="tab1"
          >
            Register
          </Tabs.Trigger>
          <Tabs.Trigger
            className="border border-1 border-accent rounded text-accent px-5 py-2  text-3xl font-mono font-bold"
            value="tab2"
          >
            Log in
          </Tabs.Trigger>
        </Tabs.List>

        {/* registration */}
        <Tabs.Content
          className="pr-5 pl-5 pb-5 pt-5 border border-1 rounded font-mono text-base"
          value="tab1"
        >
          <p className="pb-5">Create an account at board up.</p>
          <fieldset>
            <label className="">username</label> <br />
            <input
              // size="30"
              className="text-black"
              id="username"
              placeholder="johnsnow"
            />
          </fieldset>
          <fieldset className="">
            <label className="">password</label> <br />
            <input
              // size="30"
              className="text-black"
              type="password"
            />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end',
            }}
          >
            <button className="bg-accent hover:bg-slate-300 text-sm text-black font-bold font-mono py-1 px-1 rounded mt-2">
              Register
            </button>
          </div>
        </Tabs.Content>

        {/* log in */}
        <Tabs.Content
          className="pr-5 pl-5 pb-5 pt-5 border border-1 rounded font-mono text-base"
          value="tab2"
        >
          <p className="pb-5">Welcome back!</p>
          <fieldset className="">
            <label className="" placeholder="board-up@games.dk">
              username
            </label>{' '}
            <br />
            <input
              // size="30"
              className="text-black"
              type="email"
              value={username}
            />
          </fieldset>
          <fieldset className="">
            <label className="">password</label> <br />
            <input
              // size="30"
              className="text-black"
              type="password"
            />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end',
            }}
          >
            <button
              className="bg-accent hover:bg-slate-300 text-sm text-black font-bold font-mono py-1 px-1 rounded mt-2"
              onClick={handleSignin}
            >
              login
            </button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
