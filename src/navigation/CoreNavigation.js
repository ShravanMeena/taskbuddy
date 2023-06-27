import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import {
  closeConfig,
  forFadeAnim,
  openConfig,
} from './configs/NavigationConfigs';
import Landing from '../screens/landing/Landing';
import {ScreensName} from '../constants/NavigationConstants';
import TaskDetails from '../screens/taskDetails/TaskDetails';
import {navigationRef} from './helper/NavigationHelper';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreensName.Landing}
          component={Landing}
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
          component={TaskDetails}
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
