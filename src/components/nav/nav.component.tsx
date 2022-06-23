import {View, Button} from 'react-native';
import React, {FC} from 'react';

const Nav: FC<{navigation: any}> = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title="Home" onPress={() => navigation.push('Home')} />
      <Button title="Printers" onPress={() => navigation.push('Printers')} />
      <Button title="Drives" onPress={() => navigation.push('Drives')} />
    </View>
  );
};
export default Nav;
