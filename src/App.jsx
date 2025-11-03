import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";

import Navbar from "./Components/Navbar/Navbar";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/public/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <Banner></Banner>

      <div className="flex justify-between max-w-[1200px] mx-auto mt-8">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`p-4 border border-gray-300 rounded-l-xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29] text-black" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`p-4 border border-gray-300 rounded-r-xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29] text-black" : ""
            }`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle===true ? 
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}>
        
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>:<SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
       
      }
    </>
  );
}

export default App;
