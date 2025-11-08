interface Filters {
  status: 'All' | 'In Progress' | 'Ongoing';
}

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const statuses: Filters['status'][] = ['All', 'In Progress', 'Ongoing'];

  const handleStatusChange = (status: Filters['status']) => {
    setFilters({ status });
  };

  const clearFilters = () => {
    setFilters({ status: 'All' });
  };

  const hasActiveFilters = filters.status !== 'All';

  return (
    <div className="filter-bar">
      <div className="filter-bar__content">
        <div className="filter-bar__buttons">
          {statuses.map(status => (
            <button
              key={status}
              className={`filter-bar__button ${filters.status === status ? 'active' : ''}`}
              onClick={() => handleStatusChange(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {hasActiveFilters && (
          <button className="filter-bar__clear" onClick={clearFilters}>
            Clear Filter
          </button>
        )}
      </div>
    </div>
  );
}
