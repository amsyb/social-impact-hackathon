import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f7f7f7',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 8,
    marginBottom: 8,
  },
  activeButton: {
    backgroundColor: '#A3C6B8', // or match status color
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  activeText: {
    fontWeight: '600',
    color: '#fff',
  },
  clearButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#c6c6c6',
    alignSelf: 'flex-start',
  },
  clearButtonText: {
    fontSize: 14,
    color: '#333',
  },
});
