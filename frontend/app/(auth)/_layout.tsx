import DrawerMenu from '@/components/drawerMenu';
import { Drawer } from 'expo-router/drawer';
// import { useCallback } from 'react';
import { SearchContext } from '@/context/SearchContext';
import { useHandleSearch } from '@/hooks/useHandleSearch';


export default function DrawerLayout() {
  // call the backend with a search request
  // const handleSearch = useCallback(async (event: { nativeEvent: { text: string} }) => {
  //   const query = event.nativeEvent.text;

  //   try {
  //     const response = await fetch(`http://192.168.1.4:3000/api/exercises?query=${query}`);
  //     const data = await response.json();
  //     console.log('Search results:', data)
  //   } catch (error) {
  //     console.error('Search failed:', error);
  //   }
  // }, []);

const { results, handleSearch } = useHandleSearch('http://192.168.1.4.3000');


  return (
    <SearchContext.Provider value={{ results }}>
      <Drawer 
          screenOptions={{ 
            drawerStyle: { width: 200}, 
            headerSearchBarOptions: {
              placeholder: 'Search...', 
              onChangeText: handleSearch, 
              onClose: () => console.log('Search terminated'),
            },
          }}
          drawerContent={(props) => <DrawerMenu {...props} />}
        >
          <Drawer.Screen name='Home' options={{ title: 'Home' }}></Drawer.Screen>
        </Drawer>
      </SearchContext.Provider>
  );
}
