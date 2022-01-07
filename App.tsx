import React, {useEffect} from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import MyStack from './src/navigation/StackNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
