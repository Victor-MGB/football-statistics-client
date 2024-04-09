import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function LiveOdd() {
  const [oddsData, setOddsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?met=OddsLive&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setOddsData(data.result);
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

  if (!oddsData) {
    return <div className="text-blue-500">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">Live Odds</h1>
        <ul>
          {Object.keys(oddsData).map((matchId) => (
            <li
              key={matchId}
              className="mb-8 shadow-md rounded-lg overflow-hidden"
            >
              <div className="bg-gray-200 px-6 py-4">
                <h2 className="text-xl font-semibold mb-2">
                  Match ID: {matchId}
                </h2>
              </div>
              <ul className="divide-y divide-gray-300">
                {oddsData[matchId].map((odd, index) => (
                  <li key={index} className="px-6 py-4">
                    <div className="font-semibold">
                      Odd Name: {odd.odd_name}
                    </div>
                    <div>Odd Type: {odd.odd_type}</div>
                    <div>Odd Value: {odd.odd_value}</div>
                    <div>Last Updated: {odd.odd_last_updated}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LiveOdd;
