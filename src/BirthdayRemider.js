import React, { useState } from "react";
// import ErrorHandling from "./ErrorHandling";
import { useFetch } from "./useFetch";
import List from "./List";

const url = "https://randomuser.me/api/?results=10";

const BirthdayRemider = () => {
  const { users } = useFetch(url);
  // const [people, setPeople] = useState(users);
  // const { results } = users;
  console.log(users.results);

  return (
    <div>
      {users.results.map((user) => {
        // console.log(user);
        return <List />;
      })}
      {/* <List /> */}
    </div>
  );
};

export default BirthdayRemider;
