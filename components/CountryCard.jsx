
export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
}) {
  return (
    <>
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
      </>
  )
}
