import { useState, useEffect } from 'react';
import { User } from '../models/user';
import { fetchUser } from '../services/userService';

export const useAuth = () => {
  const [data, setData] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const fire = async () => {
    setLoading(true);

    const { user, error } = await fetchUser();

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    setData(user);
    setLoading(false);
  };

  useEffect(() => {
    fire();
  }, []);

  return [data, loading, error, fire];
};
