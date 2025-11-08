interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search by title or participant..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button
          className="search-bar__clear"
          onClick={() => setSearchQuery('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
