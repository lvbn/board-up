import { useState, useEffect } from 'react';
import { User } from '../models/user';
import { fetchUser } from '../services/userService';

export const useAuth = () => {
  const [_user, _setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  const fire = async () => {
    setLoading(true);

    const { user, error } = await fetchUser();

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    _setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fire();
  }, []);

  return { _user, loading, error, fire };
};
