
import './index.css';

import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import AuthApp from './components/AuthApp.jsx'
import VisitorsApp from './components/VisitorsApp'

function App() {

  const [userAuth, setUserAuth] = useState(true)


  return (
    <Router>
      {userAuth ? <AuthApp /> : <VisitorsApp />}
    </Router>
  );
}

export default App;
