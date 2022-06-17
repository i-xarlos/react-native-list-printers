/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './src/components/item/item.component';
import Section from './src/components/section/section.component';
import {printers, drives} from './src/data/fake_data';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
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
          <Section title="List Printers">
            <View style={styles.rowView}>
              {printers.map(item => (
                <Item key={item.name} src={item.src} name={item.name} />
              ))}
            </View>
          </Section>
          <Section title="List Hard Drives">
            <View style={styles.rowView}>
              {drives.map(item => (
                <Item key={item.name} src={item.src} name={item.name} />
              ))}
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
