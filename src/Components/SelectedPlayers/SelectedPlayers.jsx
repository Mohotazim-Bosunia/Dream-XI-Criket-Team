import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ perchasesPlayer }) => {
  // console.log(perchasesPlayer);
  return (
    <div>
      <h1>Selected Players</h1>
      {perchasesPlayer.map((selectPlayer) => (
        <SelectedPlayer selectPlayer={selectPlayer}></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
