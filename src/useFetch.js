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
      if (!response.ok) {
        throw new Error("could not fetch the data");
      }
      const data = await response.json();
      setUsers(data);
      setPage(true);
      setLoading(false);
      setError(false);
    } catch (err) {
      console.error(err.message);
      setError('<h2>Could not fetch data</h2>');
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getUsers();
  }, [url, getUsers]);

  return { loading, hasError, users, page, setUsers };
};
