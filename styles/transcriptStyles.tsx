import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primaryBg,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  noResults: {
    marginRight: 12,
    marginTop: 2,
  },
  overlay: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.darkGrey,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayTitle: {
    backgroundColor: colors.primaryButton,
    borderColor: colors.primaryButton,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primaryText,
    flex: 1,
  },
  closeButtonText: {
    fontSize: 14,
    color: colors.darkGrey,
    lineHeight: 20,
    marginBottom: 12,
  },
  header: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
