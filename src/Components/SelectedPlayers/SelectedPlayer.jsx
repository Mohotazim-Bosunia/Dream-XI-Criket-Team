import React from "react";

const SelectedPlayer = ({ selectPlayer }) => {
  console.log(selectPlayer);
  return (
    <div>
      <h1>Name:{selectPlayer.name}</h1>
    </div>
  );
};

export default SelectedPlayer;
