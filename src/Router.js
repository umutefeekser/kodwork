import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Favorites from './pages/Favorites'
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setFavorites } from './redux/slicers/favoriteSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

function JobStack(){

  return(
    <Stack.Navigator
      initialRouteName='JobList'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="JobList"
        component={Jobs}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
      />
    </Stack.Navigator>
  )
}

export default function App() {

  const dispatch = useDispatch()

  React.useEffect(()=>{
    AsyncStorage.getItem("@FAVORITES")
    .then(res => {
      dispatch(setFavorites(JSON.parse(res) || []))
    }).catch(err => console.log(err))
  },[])

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerTintColor: "tomato",
        drawerActiveTintColor: "tomato",
        headerTitleAlign: "center"
      }}>
        <Drawer.Screen name="Jobs" component={JobStack} />
        <Drawer.Screen name="Favorited Jobs" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}