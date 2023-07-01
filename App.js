// Play.ht to the moon 🚀

/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {TBColors} from '@theme/TBTheme';
import {CoreNavigation} from '@navigation';
import {Provider} from 'react-redux';
import {store} from '@redux/Store';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: TBColors.smokeWhite}}>
        <Provider store={store}>
          <CoreNavigation />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
