import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Standings() {
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=207&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result && data.result.total) {
          setStandings(data.result.total);
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
        <h1 className="text-2xl font-bold mb-4">League Standings</h1>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Position</th>
                <th className="border border-gray-300 p-2">Team</th>
                <th className="border border-gray-300 p-2">Played</th>
                <th className="border border-gray-300 p-2">Wins</th>
                <th className="border border-gray-300 p-2">Draws</th>
                <th className="border border-gray-300 p-2">Losses</th>
                <th className="border border-gray-300 p-2">Goals For</th>
                <th className="border border-gray-300 p-2">Goals Against</th>
                <th className="border border-gray-300 p-2">Goal Difference</th>
                <th className="border border-gray-300 p-2">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="border border-gray-300 p-2">
                    {team.standing_place}
                  </td>
                  <td className="border border-gray-300 p-2 flex items-center">
                    <img
                      src={team.team_logo}
                      alt={team.standing_team}
                      className="w-8 h-8 mr-2"
                    />
                    {team.standing_team}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_P}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_W}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_D}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_L}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_F}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_A}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_GD}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {team.standing_PTS}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Standings;
