import React from 'react'

export default function CountriesListShimmer() {

  return (
    <div className="countries-container">
      {Array.from({}).map((_, i) => {
        return (
          <div key={i} className="country">
            <div className=""></div>
            <div className="">
              <h3 className="card"></h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}
