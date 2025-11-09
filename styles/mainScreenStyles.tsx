import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%', // Ensure gradient covers full viewport at minimum
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40,
    color: '#482424', //main title
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40,
    color: '#482424', //main title
  },
  subtitle: {
    fontSize: 16,
    color: colors.tertiaryText,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: colors.tertiaryText,
    marginBottom: 20,
  },
  card: {
    color: '#fff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: colors.tertiaryText,
  },
  cardButton: {
    backgroundColor: colors.primaryButton,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  cardButtonText: {
    color: colors.secondaryText,
    fontSize: 16,
    fontWeight: '600',
  },
});
