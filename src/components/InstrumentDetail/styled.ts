import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleIndicator: { height: 0 },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  instrumentHeader: {
    padding: 20,
    borderBottomWidth: 1,
  }
})    