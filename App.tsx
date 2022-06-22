/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './src/components/item/item.component';
import Section from './src/components/section/section.component';
import {printers, drives, Printer, Drive} from './src/data/fake_data';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handlePressItem = (name: string) => {
    console.log(name);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="List Printers" mode="row">
            {printers.map((item: Printer) => (
              <Item
                key={item.id}
                src={item.src}
                name={item.name}
                onPress={handlePressItem}
              />
            ))}
          </Section>
          <Section title="List Drives" mode="row">
            {drives.map((item: Drive) => (
              <Item
                key={item.id}
                src={item.src}
                name={item.name}
                onPress={handlePressItem}
              />
            ))}
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

