import { useState, useEffect } from 'react';
import { User } from '../models/user';
import { fetchUser } from '../services/userService';

export const useAuth = () => {
  const [user, setUser] = useState<User | undefined>();
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

    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fire();
  }, []);

  return { user, setUser, loading, error, fire };
};
