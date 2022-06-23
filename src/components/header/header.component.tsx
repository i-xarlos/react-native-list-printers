import {View, Text, Button, StyleSheet} from 'react-native';
import React, {FC} from 'react';

const Header: FC<{navigation?: any; title: string; isHome?: boolean}> = ({
  navigation,
  title,
  isHome,
}) => {
  return (
    <View style={styles.header}>
      {!isHome && <Button title="<" onPress={() => navigation.push('Home')} />}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    height: 50,
  },
  title: {
    flex: 4,
    textAlign: 'center',
    marginVertical: 15,
  },
});

export default Header;
