import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScreensName} from '@constants/NavigationConstants';
import {HomeScreen, LandingScreen, TaskDetailsScreen} from '@screens';

import {navigationRef} from './helper/NavigationHelper';
import {
  closeConfig,
  forFadeAnim,
  openConfig,
} from './configs/NavigationConfigs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreensName.Landing}
          component={LandingScreen}
          options={{
            headerShown: false,
            transitionSpec: {open: openConfig, close: closeConfig},
            cardStyleInterpolator: forFadeAnim,
          }}
        />

        <Stack.Screen
          name={ScreensName.Home}
          component={HomeScreen}
          options={{
            headerShown: false,
            transitionSpec: {open: openConfig, close: closeConfig},
            cardStyleInterpolator: forFadeAnim,
          }}
        />

        <Stack.Screen
          name={ScreensName.TaskDetails}
          component={TaskDetailsScreen}
          options={{
            headerShown: false,
            transitionSpec: {open: openConfig, close: closeConfig},
            cardStyleInterpolator: forFadeAnim,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
