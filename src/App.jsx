import "./App.css";
import Filtering from "./assets/components/Filtering";
import "bootstrap/dist/css/bootstrap.min.css";
import { users } from "C:/Users/mftth/bootcamp/react/react-array/src/data/users.js";

// Good luck with the exercise 💪
function App() {
  return (
    <>
      <div className="card">
        <Filtering />
      </div>
    </>
  );
}

export default App;
