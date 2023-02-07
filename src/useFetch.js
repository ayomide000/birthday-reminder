import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [page, setPage] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      setUsers(data);
      setPage(true);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    getUsers();
  }, [url, getUsers]);

  return { loading, hasError, users, page };
};
