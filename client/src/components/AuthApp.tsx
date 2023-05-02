import React from 'react';
import { Form } from './form';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { UserDash } from './userDashboard';
// const UserDash = require('./dashboard/userDashboard')

export default function AuthApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDash />} />
        <Route path="/new-board-up" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
