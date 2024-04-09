import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Odd() {
  const [oddsData, setOddsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Odds&matchId=86392&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setOddsData(data.result["86392"]);
        } else {
          throw new Error("Data format is incorrect");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!oddsData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-4 mt-[6rem]">Odds for Match</h1>
        <ul>
          {oddsData.map((odds, index) => (
            <li key={index} className="mb-8 border rounded-lg p-4">
              <h2>Bookmaker: {odds.odd_bookmakers}</h2>
              <div>1: {odds.odd_1}</div>
              <div>X: {odds.odd_x}</div>
              <div>2: {odds.odd_2}</div>
              {/* Add more odds data as needed */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Odd;
