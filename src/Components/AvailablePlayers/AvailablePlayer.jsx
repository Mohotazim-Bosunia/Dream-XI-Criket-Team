import React, { useState } from "react";
import userImg from "../../assets/user 1.png";
import flag from "../../assets/report 1.png";
const AvailablePlayer = ({
  player,
  setBalance,
  balance,
  perchasesPlayer,
  setParchases,
}) => {
  // console.log(player);
  const { name, image, country, role, battingType, biddingPrice } = player;

  const [isSelected, setIsSelected] = useState(false);
  const handleChoseBtn = () => {
    setIsSelected(true);
    setBalance(balance - biddingPrice);
    setParchases([...perchasesPlayer, player]);
  };
  return (
    <div>
      <div>
        <div className="border-b-emerald-200 border-solid border-2 rounded-md p-4 m-4">
          <figure>
            <img src={image} alt="playersImg" />
          </figure>
          <div className="card-body">
            <div className="flex gap-4 mt-4">
              <img
                className="w-8 h-8 rounded-full bg-white p-1"
                src={userImg}
                alt="User"
              />
              <h2 className="card-title">{name}</h2>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex justify-around gap-4">
                <img className="bg-white" src={flag} alt="Flag" />
                <span>{country}</span>
              </div>
              <button className="border border-indigo-400 border-solid rounded-md px-2 py-1 ml-4 text-sm">
                {role}
              </button>
            </div>
            <br />
            <div className="card-actions justify-end">
              <span className="font-bold">Rating</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">{battingType}</span>
              <span>{battingType}</span>
            </div>
            <div className="flex justify-between">
              <span>Price:{biddingPrice}</span>
              <button
                disabled={isSelected}
                onClick={() => {
                  handleChoseBtn();
                }}
                className="border border-indigo-400 border-solid rounded-md px-2 py-1 ml-4 text-sm"
              >
                {isSelected === true ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
