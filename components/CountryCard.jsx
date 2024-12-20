import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
}) {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <div className='flag-container'>
        <img src={flag} alt="flag" />
      </div>
      <div className="card-text">
        <h2 className="card-title">{name}</h2>
        <p>
          Population: 
          {population}
        </p>
        <p>
          Region: 
          {region}
        </p>
        <p>
          Capital:
          {capital}
        </p>
      </div>
    </Link>
  )
}
