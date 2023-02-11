import React from "react";
import { useFetch } from "./useFetch";
import List from "./List";
import ErrorBoundary from "./ErrorBoundary";

const url = "https://randomuser.me/api/?results=10";

const BirthdayRemider = () => {
  const { users, setUsers } = useFetch(url);
  // const handleUser = () => {
  //   if (users.results) {
  //     setUsers((users.results.length = []));
  //     // console.log(users);
  //   }
  // };
  // const [people, setPeople] = useState(users.results);
  // const { results } = users;
  // console.log(users.results);

  return (
    <main>
      <section className="container">
        <ErrorBoundary>
          <h3>{users.results && users.results.length} birthdays today</h3>
          <List users={users.results} />
          <button onClick={() => setUsers([])}>clear all</button>
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default BirthdayRemider;
