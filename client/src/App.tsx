import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import './index.css';

import AuthApp from './components/AuthApp';
import VisitorsApp from './components/visitors-app/VisitorsApp';
import { UserContext } from './user-context';
import { User } from './models/user';

function App() {
  const { _user, loading, error, fire } = useAuth();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (_user) {
      setUser(_user);
    }
  }, [loading]);

  if (loading) {
    return <div>LOADING</div>;
  }

  return (
    <UserContext.Provider
      value={{ user, update: (user: User) => setUser(user) }}
    >
      {user ? <AuthApp /> : <VisitorsApp />}
    </UserContext.Provider>
  );
}

export default App;
