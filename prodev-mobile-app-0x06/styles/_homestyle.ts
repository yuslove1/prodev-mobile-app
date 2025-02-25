// _homestyle.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  
  },
  searchGroup: {
    padding: 20,
    backgroundColor: '#34967C',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: 'rgb(62 63 63)',
  },
  searchControl: {
    borderWidth: 0,
    paddingVertical: 8,
    color: 'rgb(189 190 190)',
  },
  searchButton: {
    backgroundColor: '#FFA500',
    padding: 12,
    borderRadius: "50%",
  },
  filterGroup: {
    flexDirection: 'row',
    padding: 16,
    gap: 35,

  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
    // width: 62,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  paginationContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  showMoreButton: {
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: 'white',
    fontSize: 16,
  },
});