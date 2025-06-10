import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
  symbolSection: {
    marginBottom: 16,
  },
  symbol: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    color: '#999',
    marginBottom: 8,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#00d4aa20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#00d4aa',
  },
})