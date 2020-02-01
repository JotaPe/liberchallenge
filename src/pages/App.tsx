import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationNativeContainer } from "@react-navigation/native";
import { Home } from "./Home";
import { Car } from "./Car";
import axios from 'axios';

export const client = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros",
  responseType: "json"
})

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationNativeContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Car" component={Car} />
        </Stack.Navigator>
      </NavigationNativeContainer>
    );
  }
}
