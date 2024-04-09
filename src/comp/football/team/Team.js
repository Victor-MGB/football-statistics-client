import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Team() {
  const [teamData, setTeamData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setTeamData(data.result[0]);
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
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!teamData) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto mt-[6rem]">
        <h1 className="text-3xl font-semibold mb-4">
          Team Details - {teamData.team_name}
        </h1>
        <div className="flex items-center justify-center mb-4">
          <img
            src={teamData.team_logo}
            alt={teamData.team_name}
            className="w-20 h-20 mr-4 rounded-full"
          />
          <p className="text-xl font-semibold">{teamData.team_name}</p>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Players:</h2>
        <ul>
          {teamData.players.map((player, index) => (
            <li
              key={index}
              className="mb-8 p-4 border border-gray-300 rounded-lg"
            >
              <p className="text-lg font-semibold mb-2">{player.player_name}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p>
                    <span className="font-semibold">Player Number:</span>{" "}
                    {player.player_number}
                  </p>
                  <p>
                    <span className="font-semibold">Player Type:</span>{" "}
                    {player.player_type}
                  </p>
                  <p>
                    <span className="font-semibold">Player Age:</span>{" "}
                    {player.player_age}
                  </p>
                  <p>
                    <span className="font-semibold">Player Country:</span>{" "}
                    {player.player_country || "N/A"}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Matches Played:</span>{" "}
                    {player.player_match_played}
                  </p>
                  <p>
                    <span className="font-semibold">Goals:</span>{" "}
                    {player.player_goals}
                  </p>
                  <p>
                    <span className="font-semibold">Yellow Cards:</span>{" "}
                    {player.player_yellow_cards}
                  </p>
                  <p>
                    <span className="font-semibold">Red Cards:</span>{" "}
                    {player.player_red_cards}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Team;
