import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from '../pages/Categories';
import DetailsDrinks from '../pages/DetailsDrinks';
import Welcome from '../pages/Welcome';
import SelectedDrinks from '../pages/SelectedDrinks';
import {setNavigator} from '../services/navigation';

const Stack = createStackNavigator();
export const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default function Routes() {
  return (
    <NavigationContainer ref={setNavigator}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{}}
        mode="modal"
        headerMode="none"
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="SelectedDrinks" component={SelectedDrinks} />
        <Stack.Screen name="DetailsDrinks" component={DetailsDrinks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
