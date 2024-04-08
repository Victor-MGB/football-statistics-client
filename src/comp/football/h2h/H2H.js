import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function H2H() {
  const [fixtures, setFixtures] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492&firstTeamId=93&secondTeamId=4973"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result && data.result.H2H) {
          setFixtures(data.result.H2H);
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
      <div className="max-w-screen-md mx-auto mt-6">
        <h1 className="text-3xl font-bold mb-8">Head-to-Head Fixtures</h1>
        {error ? (
          <div className="text-red-600">Error: {error}</div>
        ) : (
          <ul className="space-y-6">
            {fixtures.map((fixture) => (
              <li
                key={fixture.event_key}
                className="border p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold">Date:</span>{" "}
                    {fixture.event_date}
                  </div>
                  <div>
                    <span className="font-semibold">Time:</span>{" "}
                    {fixture.event_time}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">Home Team:</span>{" "}
                    {fixture.event_home_team}
                  </div>
                  {fixture.home_team_logo && (
                    <img
                      src={fixture.home_team_logo}
                      alt={fixture.event_home_team}
                      className="h-8"
                    />
                  )}
                </div>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">Away Team:</span>{" "}
                    {fixture.event_away_team}
                  </div>
                  {fixture.away_team_logo && (
                    <img
                      src={fixture.away_team_logo}
                      alt={fixture.event_away_team}
                      className="h-8"
                    />
                  )}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Halftime Result:</span>{" "}
                  {fixture.event_halftime_result}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Final Result:</span>{" "}
                  {fixture.event_final_result}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Status:</span>{" "}
                  {fixture.event_status}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Country:</span>{" "}
                  {fixture.country_name}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">League:</span>{" "}
                  {fixture.league_name}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">League Round:</span>{" "}
                  {fixture.league_round}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default H2H;
