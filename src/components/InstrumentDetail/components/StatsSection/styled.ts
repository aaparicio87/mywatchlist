import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
    statsContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
      backgroundColor: colors.red,
    },
    statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
})