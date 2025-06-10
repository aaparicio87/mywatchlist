import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
  chartContainer: {
    padding: 20,
    borderBottomWidth: 1,
  },
  chartHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  chartWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 180,
  },
})