import React from "react";
// import { useFetch } from "./useFetch";

const ErrorHandling = ({ loading, hasError }) => {
  //   const { loading, hasError } = useFetch(url);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (loading === false) {
    return (
      <div>
        <h2>Birthday</h2>
      </div>
    );
  }
  if (hasError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return;
};

export default ErrorHandling;
