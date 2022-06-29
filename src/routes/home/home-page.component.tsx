import React, {FC} from 'react';
import {Text, ScrollView, View} from 'react-native';
import Header from '../../components/header/header.component';
import Nav from '../../components/nav/nav.component';

const HomePage: FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* <Header navigation={navigation} title="Home" isHome /> */}

      <View>
        <Nav navigation={navigation} />
      </View>
      <Text
        style={{
          padding: 60,
          color: 'black'
        }}>
        This is another route
      </Text>
    </ScrollView>
  );
};

export default HomePage;
