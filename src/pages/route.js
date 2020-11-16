import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './home';
import HomeReadingList from './homeReadingList';


const Stack = createStackNavigator()
const Root = () =>{
  return(
    <Stack.Navigator initialRouteName={"Home"}
                     screenOptions={{
                       headerShown: false
                     }}>
      <Stack.Screen name={"Home"} component={Home}/>
      <Stack.Screen name={"HomeReadingList"} component={HomeReadingList}/>
    </Stack.Navigator>
  )
}

const Route = () => {
  return(
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  )
}
export default Route
