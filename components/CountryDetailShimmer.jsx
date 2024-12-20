import React from 'react'
import '../styles/CountryDetailShimmer.css'

export default function CountryDetailShimmer() {
  return (
    <div className="country-details shimmer">
      <div className="flag"></div>
      <div className="details-text-container">
        <h1 className="title"></h1>
      </div>
    </div>
  )
}
