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
      setError(
        "Could not fetch data due to poor internet connection or server is down. Please try again later.",
      );
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getUsers();
  }, [url, getUsers]);

  return { loading, hasError, users, page, setUsers };
};
