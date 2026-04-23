import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ perchasesPlayer, remove }) => {
  // console.log(perchasesPlayer);
  return (
    <div>
      <h1>Selected Players</h1>
      {perchasesPlayer.map((selectPlayer) => (
        <SelectedPlayer
          selectPlayer={selectPlayer}
          remove={remove}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
