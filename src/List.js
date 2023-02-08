import React from "react";
// import { useFetch } from "./useFetch";

// const url = "https://randomuser.me/api/?results=10";

const List = ({ users }) => {
  console.log(users);
  return (
    <>
      {users &&
        users.map((user) => {
          const { name, picture, registered, login } = user;
          return (
            <article key={login.uuid} className="user">
              <img src={picture.large} alt={name.first} />
              <div>
                <h4>{`${name.first} ${name.last}`}</h4>
                <p>{registered.age}</p>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default List;
