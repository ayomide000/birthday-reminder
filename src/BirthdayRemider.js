import React, { useState } from "react";
// import ErrorHandling from "./ErrorHandling";
import { useFetch } from "./useFetch";
import List from "./List";

const url = "https://randomuser.me/api/?results=10";

const BirthdayRemider = () => {
  const { loading, hasError, users } = useFetch(url);
  const [people, setPeople] = useState(users);
  // const [blog, setBlog] = useState(false);
  console.log(users);

  return (
    <div>
      {hasError && <div>{hasError}</div>}
      {loading && <h2>Loading...</h2>}
      {users && <List />}
    </div>
  );
};

export default BirthdayRemider;
