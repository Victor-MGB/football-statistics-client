import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Players() {
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Players&playerId=103051168&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setPlayerData(data.result[0]);
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

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto mt-[6rem]">
        <h1 className="text-3xl font-semibold mb-4">
          Player Details - {playerData.player_name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p>
              <span className="font-semibold">Player Number:</span>{" "}
              {playerData.player_number}
            </p>
            <p>
              <span className="font-semibold">Player Type:</span>{" "}
              {playerData.player_type}
            </p>
            <p>
              <span className="font-semibold">Player Age:</span>{" "}
              {playerData.player_age}
            </p>
            <p>
              <span className="font-semibold">Player Country:</span>{" "}
              {playerData.player_country || "N/A"}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Matches Played:</span>{" "}
              {playerData.player_match_played}
            </p>
            <p>
              <span className="font-semibold">Goals:</span>{" "}
              {playerData.player_goals}
            </p>
            <p>
              <span className="font-semibold">Yellow Cards:</span>{" "}
              {playerData.player_yellow_cards}
            </p>
            <p>
              <span className="font-semibold">Red Cards:</span>{" "}
              {playerData.player_red_cards}
            </p>
          </div>
          {/* Add more player details here */}
        </div>
        <div className="mt-4">
          <img
            src={playerData.player_image}
            alt={playerData.player_name}
            className="w-48 h-48 rounded-full mx-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Players;
