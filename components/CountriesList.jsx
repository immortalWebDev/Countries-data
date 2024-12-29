import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
// import countriesDataCache from "../countriesData";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const FALLBACK_URL = process.env.REACT_APP_FALLBACK_URL;

  useEffect(() => {
    const fetchCountriesData = async () => {
      // Check if data is in localStorage
      const cachedData = localStorage.getItem("allNationsDataCache");
      const cachedTime = localStorage.getItem("cacheTimestamp");
      const isCacheValid =
        cachedData && cachedTime && Date.now() - cachedTime < 3600000;

      if (isCacheValid) {
        // If cached data exists, use it
        setCountriesData(JSON.parse(cachedData));
        console.log("Loaded data from localStorage");
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/all`);
        const data = await response.json();

        console.log("Fetched data:", data);
        setCountriesData(data);
        localStorage.setItem("allNationsDataCache", JSON.stringify(data));
        localStorage.setItem("cacheTimestamp", Date.now().toString());
      } catch (error) {
        console.error("Error fetching countries data:", error);
        console.log(
          "Used fallback url due to HTTP2 protocol issue of main url"
        );

        try {
          const response = await fetch(`${FALLBACK_URL}`);
          const data = await response.json();

          console.log("Fetched data fallback url:", data);
          setCountriesData(data);

          localStorage.setItem("allNationsDataCache", JSON.stringify(data));
          localStorage.setItem("cacheTimestamp", Date.now().toString());
        } catch (error) {
          console.log("Failed to fetch data from server", error);
          // console.log("Using local cache data");
          // setCountriesData(countriesDataCache);
        }
      }
    };

    fetchCountriesData();
  }, []);

  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }

  const filteredCountries = countriesData.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.region.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {filteredCountries.length ? (
        <div className="countries-container">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          ))}
        </div>
      ) : (
        <div className="not-found">No such country available!</div>
      )}
    </>
  );
}
