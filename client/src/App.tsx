import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import './index.css';

import AuthApp from './components/AuthApp';
import VisitorsApp from './components/visitors-app/VisitorsApp';

function App() {
  const [user, loading, error, fire] = useAuth();

  console.log(user);

  return <Router>{user ? <AuthApp /> : <VisitorsApp />}</Router>;
}

export default App;
