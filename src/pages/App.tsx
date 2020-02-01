import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationNativeContainer } from "@react-navigation/native";
import { Home } from "./Home";
import { Car } from "./Car";
import { Provider } from "mobx-react";
import CarStore from "src/model/carStore";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider carStore={CarStore}>
        <NavigationNativeContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Car" component={Car} />
          </Stack.Navigator>
        </NavigationNativeContainer>
      </Provider>
    );
  }
}
