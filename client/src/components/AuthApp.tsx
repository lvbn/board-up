import React from 'react'
import { Form } from './form';
import { Routes, Route } from "react-router-dom";

import { UserDash } from './dashboard/userDashboard'
// const UserDash = require('./dashboard/userDashboard')


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
