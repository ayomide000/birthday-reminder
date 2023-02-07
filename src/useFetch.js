import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [users, setUsers] = useState(false);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    getUsers();
  }, [url, getUsers]);

  return { loading, hasError, users };
};
