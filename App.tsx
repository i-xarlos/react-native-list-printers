import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigation/stack-nav.component';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;

