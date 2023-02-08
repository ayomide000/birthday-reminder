import React from "react";
import { useFetch } from "./useFetch";
import List from "./List";

const url = "https://randomuser.me/api/?results=10";

const BirthdayRemider = () => {
  const { users, setUsers } = useFetch(url);
  // const [people, setPeople] = useState(users.results);
  // const { results } = users;
  // console.log(users.results);

  return (
    <main>
      <section className="container">
        <h3>{users.results && users.results.length} birthdays today</h3>
        <List users={users.results} />
        <button onClick={() => setUsers([])}>clear all</button>
      </section>
    </main>
  );
};

export default BirthdayRemider;
