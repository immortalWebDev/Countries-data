import React, { useEffect, useState } from 'react'
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

  return (
    <>
      <div className="countries-container">
        
      </div>
    </>
  )
}
