import { Suspense } from "react";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { useState } from "react";

const fetchplayers = async () => {
  const res = await fetch("players.json");
  return res.json();
};

function App() {
  const promisePlayers = fetchplayers();
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <Navber></Navber>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => settoggle(true)}
          className="btn btn-accent bg-emerald-500 p-2 rounded-md"
        >
          Abailable
        </button>
        <button
          onClick={() => settoggle(false)}
          className="btn btn-accent bg-cyan-500 p-2 rounded-md"
        >
          Selected
        </button>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
