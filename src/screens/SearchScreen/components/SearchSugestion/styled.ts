import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
 suggestionsContainer: {
    paddingHorizontal: 20,
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 12,
  },
  suggestionTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  suggestionTag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
  suggestionTagText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
  },
})