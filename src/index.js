import React from 'react'
import Route from './pages/route';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import RootReducers from './redux/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist:[""]
}
const persistReducers = persistReducer(persistConfig, RootReducers)
const store = createStore(persistReducers)
const persist = persistStore(store)

const App = () => {
  return(
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <Route/>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}
export default App
