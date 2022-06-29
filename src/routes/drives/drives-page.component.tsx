import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import {drives, Drive} from '../../data/mock_data';
import Item from '../../components/item/item.component';
import Header from '../../components/header/header.component';
import Section from '../../components/section/section.component';
import Nav from '../../components/nav/nav.component';

const DrivesPage: FC<{navigation: any}> = ({navigation}) => {
  const handlePressItem = (name: string) => {
    console.log(name);
  };
  return (
    <ScrollView>
      {/* <Header navigation={navigation} title="Drives" /> */}

      <View style={{backgroundColor: 'white'}}>
        <Nav navigation={navigation} />
      </View>
      <Section title="Drives" mode="row">
        {drives.map((item: Drive) => (
          <Item
            key={item.id}
            src={item.src}
            name={item.name}
            onPress={handlePressItem}
          />
        ))}
      </Section>
    </ScrollView>
  );
};

export default DrivesPage;
