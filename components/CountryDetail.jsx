import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import CountryDetailShimmer from './CountryDetailShimmer'
import "../styles/CountryDetails.css"

export default function CountryDetail() {
  const [isDark] = useTheme()
  const params = useParams()
  const { state } = useLocation()
  const countryName = params.country

  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [borderLoading, setBorderLoading] = useState(true) 

  const BASE_URL = process.env.REACT_APP_BASE_URL

  async function updateCountryData(data) {
    
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common || "N/A",
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital || "N/A",
      flag: data.flags?.svg,
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(', '),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(', '),
      borders: [],
    })

    if (!data.borders) {
      data.borders = []
    }

    setBorderLoading(true) 

    
    const borders = await Promise.all(
      data.borders.map(async (border) => {
        const response = await fetch(`${BASE_URL}/alpha/${border}`);
        const [borderCountry] = await response.json();
        return borderCountry.name.common;
      })
    );
    
    setTimeout(() => {
      setCountryData((prevState) => ({ ...prevState, borders }));
      setBorderLoading(false);
    }, 0);
    
    // Promise.resolve().then(() => {
    //   setCountryData((prevState) => ({ ...prevState, borders }));
    //   setBorderLoading(false);
    // });
    
  }


  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        if (state) {
          console.log('one country from state useLocation', state);
          updateCountryData(state); 
          return;
        }
  
        const response = await fetch(`${BASE_URL}/name/${countryName}?fullText=true`);
        const [data] = await response.json();
        console.log('one country data fetched fresh:', data);
        updateCountryData(data);
      } catch (err) {
        console.error(err);
        setNotFound(true); 
      }
    };
  
    fetchCountryData(); 
  }, [countryName]);
  

  if (notFound) {
    return <div className="not-found">There is no such country!</div>
  }

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {countryData === null ? (
          <CountryDetailShimmer />
        ) : (
          <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>
                    Native Name: {countryData.nativeName || countryData.name}
                  </b>
                </p>
                <p>
                  <b>
                    Population: {countryData.population.toLocaleString('en-IN')}
                  </b>
                </p>
                <p>
                  <b>Region: {countryData.region}</b>
                </p>
                <p>
                  <b>Sub Region: {countryData.subregion}</b>
                </p>
                <p>
                  <b>Capital: {countryData.capital?.join(', ')}</b>
                </p>
                <p>
                  <b>Top Level Domain: {countryData.tld}</b>
                </p>
                <p>
                  <b>Currencies: {countryData.currencies}</b>
                </p>
                <p>
                  <b>Languages: {countryData.languages}</b>
                </p>
              </div>
              {borderLoading ? (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  <span>Searching countries...</span>
                </div>
              ) : countryData.borders.length !== 0 ? (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  <span>No border countries</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
