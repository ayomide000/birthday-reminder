import React from "react";
import ErrorHandling from "./ErrorHandling";
import { useFetch } from "./useFetch";

const url = "https://randomuser.me/api/?results=10";

const BirthdayRemider = () => {
  const { loading, hasError, users } = useFetch(url);
  console.log(users);

  return (
    <div>
      <ErrorHandling loading={loading} hasError={hasError} />
      {/* <h2>Birthday</h2> */}
    </div>
  );
};

export default BirthdayRemider;
