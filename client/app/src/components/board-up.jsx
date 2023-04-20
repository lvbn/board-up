import React, { useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import './../App.css';

export function BoardUp({bu}) {
  
    return (
      <div className='font-bold underline flex-col'>
        <div>id: {bu._id}</div>
        <div>Game: {bu.gameName}</div>
        <div>location: {bu.location}</div>
        <Accordion.Root type='multiple'>
          <Accordion.Item value={bu._id}> 
            <Accordion.Trigger>tell me more!:</Accordion.Trigger>
            <Accordion.Content>{bu.details}
            <button className='' type='submit'>Join!</button>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        <br/>
    </div>
  );
}