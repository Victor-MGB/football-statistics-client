import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Fixtures() {
  const [fixtures, setFixtures] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10; // Define perPage constant

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchFixtures();
    }
  }, [searchQuery]); 

  const fetchFixtures = () => {
    fetch(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492&from=2021-05-18&to=2021-05-18&page=${page}&per_page=${perPage}&league_round=${searchQuery}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setFixtures(data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  };

  const handleSearch = () => {
    setPage(1); // Reset page to 1 when performing a new search
    fetchFixtures();
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto mt-6 p-4">
        <h1 className="text-3xl font-bold mb-8">Fixtures for May 18, 2021</h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter round or season..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-1 mr-4"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </div>

        {error ? (
          <div className="text-red-600 font-semibold mb-8">Error: {error}</div>
        ) : (
          <ul>
            {fixtures.map((fixture) => (
              <li
                key={fixture.event_key}
                className="mb-8 border rounded-lg p-4 shadow-md"
              >
                <div className="text-lg font-semibold mb-2">
                  Date: {fixture.event_date} | Time: {fixture.event_time}
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-4">
                    Home Team: {fixture.event_home_team}{" "}
                    {fixture.home_team_logo && (
                      <img
                        src={fixture.home_team_logo}
                        alt={fixture.event_home_team}
                        className="h-6 ml-2"
                      />
                    )}
                  </div>
                  <div className="flex items-center">
                    Away Team: {fixture.event_away_team}{" "}
                    {fixture.away_team_logo && (
                      <img
                        src={fixture.away_team_logo}
                        alt={fixture.event_away_team}
                        className="h-6 ml-2"
                      />
                    )}
                  </div>
                </div>
                <div>
                  Halftime Result: {fixture.event_halftime_result} | Final
                  Result: {fixture.event_final_result}
                </div>
                <div>Status: {fixture.event_status}</div>
                <div>Country: {fixture.country_name}</div>
                <div>League: {fixture.league_name}</div>
                <div>Round: {fixture.league_round}</div>
                <div>Season: {fixture.league_season}</div>
                <div>Stadium: {fixture.event_stadium}</div>
                <div>Referee: {fixture.event_referee}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Fixtures;
