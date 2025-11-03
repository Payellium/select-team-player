import React, { useState } from "react";
import circle from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";

const PlayerCard = ({ player, setAvailableBalance, availableBalance,purchasedPlayers,setPurchasedPlayers }) => {
    
  const [isSelected, setIsSelected] = useState(false);
    
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("$").join("").split(",").join(""))
    if(availableBalance<playerPrice){
        alert('Not sufficient coins!')
        return
    }
    setIsSelected(true)
    setAvailableBalance(
      availableBalance - playerPrice
    );
    setPurchasedPlayers([...purchasedPlayers,playerData])
  };
  return (
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
          <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn ">
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
