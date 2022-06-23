import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../routes/home/home-page.component';
import DrivesPage from '../routes/drives/drives-page.component';
import PrintersPage from '../routes/printers/printers-page.component';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={'Home'} component={HomePage} />
      <Stack.Screen name={'Drives'} component={DrivesPage} />
      <Stack.Screen name={'Printers'} component={PrintersPage} />
    </Stack.Navigator>
  );
}
