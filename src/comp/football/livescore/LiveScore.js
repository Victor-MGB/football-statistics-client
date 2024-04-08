import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";

function LiveScore() {
  const [liveScore, setLiveScore] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setLiveScore(data.result);
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

      <div className="container mx-auto mt-6">
        <h1 className="text-3xl font-semibold text-center mb-8">
          LiveScore Trend
        </h1>

        {error ? (
          <div className="text-red-600 text-center">{error}</div>
        ) : (
          <ul className="grid gap-8">
            {liveScore.map((score) => (
              <li
                key={score.event_key}
                className="border border-gray-300 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">
                    {score.event_home_team}
                  </div>
                  {score.home_team_logo && (
                    <img
                      src={score.home_team_logo}
                      alt={score.event_home_team}
                      className="h-8"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">
                    {score.event_away_team}
                  </div>
                  {score.away_team_logo && (
                    <img
                      src={score.away_team_logo}
                      alt={score.event_away_team}
                      className="h-8"
                    />
                  )}
                </div>
                <div className="text-sm mb-2">Date: {score.event_date}</div>
                <div className="text-sm mb-2">Time: {score.event_time}</div>
                <div className="text-sm mb-2">
                  Halftime Result: {score.event_halftime_result}
                </div>
                <div className="text-sm mb-2">
                  Final Result: {score.event_final_result}
                </div>
                <div className="text-sm mb-2">
                  Event Status: {score.event_status}
                </div>
                <div className="text-sm mb-2">
                  Country: {score.country_name}
                </div>
                <div className="text-sm mb-2">League: {score.league_name}</div>
                <div className="text-sm mb-2">
                  League Round: {score.league_round}
                </div>
                <div className="text-sm mb-2">
                  League Season: {score.league_season}
                </div>
                <div className="text-sm mb-2">
                  Stadium: {score.event_stadium}
                </div>
                <div className="text-sm mb-2">
                  Referee: {score.event_referee}
                </div>
                <div className="text-sm mb-2">
                  Event Live: {score.event_live}
                </div>

                {/* Goalscorers */}
                <div className="text-sm mb-2">
                  Goalscorers:
                  {score.goalscorers.map((goal, index) => (
                    <div key={index}>
                      scored for {score.event_home_team} at the {goal.time}th
                      minute, assisted by {goal.away_assist}.
                    </div>
                  ))}
                </div>

                {/* Cards */}
                <div className="text-sm mb-2">
                  Cards:
                  {score.cards.map((card, index) => (
                    <div key={index}>
                      {card.home_fault} received a {card.card} for{" "}
                      {score.event_home_team} at the {card.time}th minute.
                    </div>
                  ))}
                </div>

                {/* Lineups */}
                <div className="text-sm mb-2">
                  Lineups:
                  {score.lineups.home_team.starting_lineups.map(
                    (player, index) => (
                      <div key={index}>
                        {player.player} - {player.player_position}
                      </div>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default LiveScore;
