import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";

import Navbar from "./Components/Navbar/Navbar";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";

const fetchPlayers = async () => {
  const res = await fetch("/public/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
