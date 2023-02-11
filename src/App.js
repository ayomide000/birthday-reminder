import { useFetch } from "./useFetch";
import BirthdayRemider from "./BirthdayRemider";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import Button from "@mui/material/Button";

const url = "https://randomuser.me/api/?results=10";
function App() {
  const { loading, hasError, page } = useFetch(url);
  return (
    <div>
      {hasError && <div>{hasError}</div>}
      {loading && <h2>Loading...</h2>}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {page && <BirthdayRemider />}
    </div>
  );
}

export default App;
