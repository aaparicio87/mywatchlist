import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleIndicator: {
    backgroundColor: '#666',
    width: 40,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
  },
  instrumentHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  chartContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  statsContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  statLabel: {
    fontSize: 14,
    color: '#999',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  actionsContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4757',
    paddingVertical: 16,
    borderRadius: 12,
  },
  removeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
 
})    