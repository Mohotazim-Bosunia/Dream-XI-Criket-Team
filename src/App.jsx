import { Suspense } from "react";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";

const fetchplayers = async () => {
  const res = await fetch("players.json");
  return res.json();
};

function App() {
  const promisePlayers = fetchplayers();
  return (
    <>
      <Navber></Navber>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
