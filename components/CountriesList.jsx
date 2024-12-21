import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  const BASE_URL = process.env.REACT_APP_BASE_URL

  useEffect(() => {

    const fetchCountriesData = async () => {

      const response = await fetch(`${BASE_URL}/all`)
      const data = await response.json()
      console.log(data)
      setCountriesData(data)
    }

    fetchCountriesData()
    
  }, [])

  if (!countriesData.length) {
    return <CountriesListShimmer />
  }


  const filteredCountries = countriesData.filter((country) =>
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
        <div className="not-found">
          No such country available!
        </div>
      )}
    </>
  );
}
