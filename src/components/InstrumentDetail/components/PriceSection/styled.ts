import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
  priceSection: {
    alignItems: 'flex-start',
  },
  price: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 8,
  },
   changeText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 6,
  },
    changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
})