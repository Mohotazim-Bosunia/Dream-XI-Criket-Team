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
const promisePlayers = fetchplayers();

function App() {
  const [toggle, settoggle] = useState(true);
  const [balance, setBalance] = useState(250);
  return (
    <>
      <Navber balance={balance}></Navber>
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
          <AvailablePlayers
            promisePlayers={promisePlayers}
            setBalance={setBalance}
            balance={balance}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
