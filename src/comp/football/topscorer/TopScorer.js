import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function TopScorer() {
  const [topScorers, setTopScorers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=207&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setTopScorers(data.result);
        } else {
          throw new Error("Data format is incorrect");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto mt-[6rem]">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Top Scorers
        </h1>
        {error ? (
          <div className="text-red-600">Error: {error}</div>
        ) : (
          <ul>
            {topScorers.map((player, index) => (
              <li
                key={index}
                className="mb-8 border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-lg font-semibold text-gray-900">
                  Player Place: {player.player_place}
                </div>
                <div className="text-gray-800">
                  Player Name: {player.player_name}
                </div>
                <div className="text-gray-800">
                  Team Name: {player.team_name}
                </div>
                <div className="text-gray-800">Team Key: {player.team_key}</div>
                <div className="text-gray-800">Goals: {player.goals}</div>
                <div className="text-gray-800">
                  Assists: {player.assists !== null ? player.assists : "N/A"}
                </div>
                <div className="text-gray-800">
                  Penalty Goals: {player.penalty_goals}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default TopScorer;
