// Country.js
import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => response.json())
      .then((data) => {
        const countriesData = data.result;
        setCountries(countriesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
    <Navbar/>
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">List of Countries</h1>
        <ul className="grid grid-cols-1 gap-4">
          {countries.map((country) => (
            <li
              key={country.country_key}
              className="flex items-center p-4 bg-gray-100 rounded"
            >
              <img
                src={`https://apiv2.allsportsapi.com/logo/logo_country/${
                  country.country_key
                }_${country.country_name.toLowerCase()}.png`}
                alt={country.country_name}
                className="w-10 h-10 mr-4"
              />
              <span className="text-lg font-semibold">
                {country.country_name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Country;
