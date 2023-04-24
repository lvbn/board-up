import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs'

export function Panel() {

    //Redirecting
  const nav = useNavigate();

  function goUser() {
    nav('/board-ups');
  }
  
  return (
    <div className="flex justify-center text-slate-300 text-xl">
    <Tabs.Root className="mt-10" defaultValue="tab1">
    <Tabs.List className="text-center" aria-label="Manage your account">
      <Tabs.Trigger className="border border-1 border-accent rounded text-accent px-5 py-2 text-3xl font-mono font-bold" value="tab1">
        Register
      </Tabs.Trigger>
      <Tabs.Trigger className="border border-1 border-accent rounded text-accent px-5 py-2  text-3xl font-mono font-bold" value="tab2">
        Log in
      </Tabs.Trigger>
    </Tabs.List>
        
    <Tabs.Content className="pr-5 pl-5 pb-5 pt-5 border border-1 rounded font-mono text-base" value="tab1">
      <p className="pb-5">Create an account at board up.</p>
      <fieldset>
        <label className="">
          Name
        </label> <br/>
        <input size="30" className="text-black" id="firstname" placeholder="John" />
      </fieldset>
      <fieldset>
        <label>
          Last name
        </label> <br/>
        <input size="30" className="text-black" id="firstname" placeholder="Snow" />
      </fieldset>    
      <fieldset>
        <label className="">
          Username
        </label> <br/>
        <input size="30" className="text-black" id="username" placeholder="johnsnow" />
      </fieldset>
      <fieldset>
        <label className="">
          Email
        </label> <br/>
        <input size="30" className="text-black" id="email" placeholder="night@watch.wall" />
      </fieldset>    
      <fieldset className="">
        <label className="" >
        password      
        </label> <br/>
        <input size="30" className="text-black" type="password" />
      </fieldset>    
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="bg-accent hover:bg-slate-300 text-sm text-black font-bold font-mono py-1 px-1 rounded mt-2">Register</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="pr-5 pl-5 pb-5 pt-5 border border-1 rounded font-mono text-base" value="tab2">
      <p className="pb-5">Welcome back!</p>
      <fieldset className="">
        <label className="" placeholder="board-up@games.dk" >
          email
        </label> <br/>
        <input size="30" className="text-black" type="email" />
      </fieldset>
      <fieldset className="">
        <label className="" >
        password      
        </label> <br/>
        <input size="30" className="text-black" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="bg-accent hover:bg-slate-300 text-sm text-black font-bold font-mono py-1 px-1 rounded mt-2"
            onClick={goUser}
            >login</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
    </div>
  )
}


  


