import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../../routes/home/home-page.component';
import DrivesPage from '../../routes/drives/dives-page.component';
import PrintersPage from '../../routes/printers/printers-page.component';
const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'home'} component={HomePage} />
      <Stack.Screen name={'drives'} component={DrivesPage} />
      <Stack.Screen name={'printers'} component={PrintersPage} />
    </Stack.Navigator>
  );
}
