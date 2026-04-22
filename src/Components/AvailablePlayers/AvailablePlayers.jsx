import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ promisePlayers, setBalance, balance }) => {
  const players = use(promisePlayers);
  console.log(players);
  return (
    <div>
      <div>Available players:{players.length}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => (
          <AvailablePlayer
            setBalance={setBalance}
            balance={balance}
            player={player}
            key={player.playerId}
          ></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
