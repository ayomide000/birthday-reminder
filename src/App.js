import { useFetch } from "./useFetch";
import BirthdayRemider from "./BirthdayRemider";

const url = "https://randomuser.me/api/?results=10";
function App() {
  const { loading, hasError, page } = useFetch(url);
  return (
    <div>
      {hasError && <div>{hasError}</div>}
      {loading && <h2>Loading...</h2>}
      {page && <BirthdayRemider />}
    </div>
  );
}

export default App;
