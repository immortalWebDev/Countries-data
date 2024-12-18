

export default function SearchBar({ setQuery }) {
  return (
    <div className="search-container">
      <i className=""></i>
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        
      />
    </div>
  )
}
