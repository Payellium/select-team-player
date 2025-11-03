import React, { use } from "react";
import circle from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="max-w-[1200px] mx-auto gap-4 grid grid-cols-1 md:grid-cols-3">
      {playersData.map((player) => (
        <div className="card bg-base-100 shadow-sm p-4">
          <figure>
            <img
              src={player.playerImage}
              alt="Shoes"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img className="w-7 h-7" src={circle} alt="" />
              <h2 className="card-title ml-2">{player.playerName}</h2>
            </div>
            <div className="flex justify-between items-center border-b border-gray-400 pb-2">
              <div className="flex mt-4 items-center">
                <img className="w-5 h-5" src={flagImg} alt="" />
                <span className="ml-2">{player.playerCountry}</span>
              </div>
              <button className="btn">{player.playerRole}</button>
            </div>
            <div className="flex justify-between font-semibold mt-4 mb-2">
              <h3>Rating</h3>
              <span>{player.rating}</span>
            </div>
            <div className="flex justify-between">
              <span>{player.battingStyle}</span>
              <span>{player.bowlingStyle}</span>
            </div>

            <div className="card-actions mt-3 flex justify-between items-center">
              <p>
                Price: <span>{player.price}</span>
              </p>
              <button className="btn ">Choose Player</button>
            </div>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default AvailablePlayers;
