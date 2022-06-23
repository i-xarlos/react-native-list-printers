import React, {FC} from 'react';
import {Text, ScrollView, View} from 'react-native';
import Header from '../../components/header/header.component';
import Nav from '../../components/nav/nav.component';

const HomePage: FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <Header navigation={navigation} title="Home" isHome />

      <View>
        <Nav navigation={navigation} />
      </View>
      <Text
        style={{
          padding: 60,
        }}>
        Etiam consectetur commodo libero sed porttitor. Nullam porta, metus at
        tristique egestas, mi lacus pretium tellus, vitae tincidunt tortor dolor
        bibendum velit. Phasellus a nisl feugiat, fermentum magna semper,
        vestibulum nibh. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean pellentesque ultricies lorem ac
        congue. Aenean a tellus mi. Aliquam sollicitudin lorem euismod eros
        lobortis, a malesuada velit ultricies. Ut ac iaculis odio. Maecenas
        elementum eros tellus, sit amet blandit massa vehicula sit amet. Aenean
        ac lobortis ex, id aliquet dui.{' '}
      </Text>
    </ScrollView>
  );
};

export default HomePage;
