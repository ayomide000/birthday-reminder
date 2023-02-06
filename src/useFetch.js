import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    getUsers();
  }, [url, getUsers]);

  return { loading, hasError, users };
};
