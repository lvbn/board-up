import React from 'react'
import { Form } from './form';

import { UserDash } from './dashboard/userDashboard'
import { Routes, Route } from "react-router-dom";


export default function AuthApp() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserDash /> } />
        <Route path='/new-board-up' element={<Form/>} />
      </Routes>
    </div>
  )
}
