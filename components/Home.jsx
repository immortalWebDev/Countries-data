
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'

export default function Home() {
  return (
    <main>
      <div>
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
    </main>
  )
}
