import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './app/navigations';
import {Provider} from 'react-redux';
import {store, persistor} from './app/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
          animated={true}
        />
        <AppNavigator />
      </SafeAreaProvider>
      <Toast topOffset={50} />
    </React.Fragment>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
