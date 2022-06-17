import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  mode?: 'default' | 'row';
};

const Section: React.FC<SectionProps> = ({children, mode, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles({isDarkMode}).sectionContainer}>
      <Text
        style={[
          styles({}).sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>

      <View style={mode === 'row' ? styles({}).rowView : {}}>{children}</View>
    </View>
  );
};

const styles = (props: any) =>
  StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      backgroundColor: props.isDarkMode ? Colors.black : Colors.white,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 20,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    rowView: {
      flex: 1,
      flexDirection: 'row',
    },
  });

export default Section;
