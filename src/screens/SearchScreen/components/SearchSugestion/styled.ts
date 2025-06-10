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
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  suggestionTagText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
  },
})