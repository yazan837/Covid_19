import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../index';
import CountriesList from '../CountriesList';
import CountriesDetaiels from '../CountrieDetaiels';

export type RootStackParamList = {
  CountriesList: any;
  HomePage: any;
  CountriesDetaiels:any
};
const Stack = createStackNavigator<RootStackParamList>();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            header: ({}) => null,
          }}
        />
        <Stack.Screen name="CountriesList" component={CountriesList} />
        <Stack.Screen name="CountriesDetaiels" component={CountriesDetaiels} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
