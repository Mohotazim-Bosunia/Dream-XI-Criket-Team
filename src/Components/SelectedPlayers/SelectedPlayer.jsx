import React from "react";

const SelectedPlayer = ({ selectPlayer }) => {
  const { name, image, battingType } = selectPlayer;
  //console.log(selectPlayer);
  return (
    <div>
      <div className="flex gap-36">
        <div className="card card-side bg-base-100 shadow-sm m-5">
          <div className="flex gap-5">
            <figure>
              <img className="w-18 h-18 rounded-2xl" src={image} alt="img" />
            </figure>
            <div className="card-body">
              <div className="">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{battingType}</p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="bg-blue-500">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
