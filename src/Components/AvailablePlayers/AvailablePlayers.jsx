import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({
  promisePlayers,
  setBalance,
  balance,
  perchasesPlayer,
  setParchases,
}) => {
  const players = use(promisePlayers);
  // console.log(players);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => (
          <AvailablePlayer
            setBalance={setBalance}
            balance={balance}
            player={player}
            key={player.playerId}
            perchasesPlayer={perchasesPlayer}
            setParchases={setParchases}
          ></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
