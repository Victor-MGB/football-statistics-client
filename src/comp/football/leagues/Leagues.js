import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Leagues() {
  const [leagues, setLeagues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const leaguesData = data.result;
        setLeagues(leaguesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">List of Leagues</h1>
        {error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leagues.map((league) => (
              <div
                key={league.league_key}
                className="border rounded-lg overflow-hidden shadow-md"
              >
                {league.league_logo && (
                  <img
                    src={league.league_logo}
                    alt={league.league_name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {league.league_name}
                  </h2>
                  <p className="text-gray-700">{league.country_name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Leagues;
