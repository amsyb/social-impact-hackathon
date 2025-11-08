import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/filterBarStyles';

interface Filters {
  status: 'All' | 'In Progress' | 'Completed';
}

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const statuses: Filters['status'][] = ['All', 'In Progress', 'Completed'];

  const handleStatusChange = (status: Filters['status']) => {
    setFilters({ status });
  };

  const clearFilters = () => {
    setFilters({ status: 'All' });
  };

  const hasActiveFilters = filters.status !== 'All';

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        {statuses.map(status => (
          <Pressable
            key={status}
            style={[styles.filterButton, filters.status === status && styles.activeButton]}
            onPress={() => handleStatusChange(status)}
          >
            <Text style={[styles.filterText, filters.status === status && styles.activeText]}>
              {status}
            </Text>
          </Pressable>
        ))}
      </View>

      {hasActiveFilters && (
        <Pressable style={styles.clearButton} onPress={clearFilters}>
          <Text style={styles.clearButtonText}>Clear Filter</Text>
        </Pressable>
      )}
    </View>
  );
}
