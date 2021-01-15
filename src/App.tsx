import React, {Suspense} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';
import {RelayEnvironmentProvider} from 'relay-hooks';

import RelayEnv from './services/RelayEnv';

import Home from './pages/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RelayEnvironmentProvider environment={RelayEnv}>
        <SafeAreaView style={{flex: 1}}>
          <Suspense fallback={<ActivityIndicator />}>
            <Home />
          </Suspense>
        </SafeAreaView>
      </RelayEnvironmentProvider>
    </>
  );
};

export default App;
