
export default function SelectMenu({setQuery}) {
  return (
    <select className="filter" onChange={(e) => setQuery(e.target.value.toLowerCase())}>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
