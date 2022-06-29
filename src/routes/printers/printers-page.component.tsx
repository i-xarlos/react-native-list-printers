import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import {printers, Printer} from '../../data/fake_data';
import Item from '../../components/item/item.component';
import Section from '../../components/section/section.component';
import Nav from '../../components/nav/nav.component';
import Header from '../../components/header/header.component';

const PrintersPage: FC<{navigation: any}> = ({navigation}) => {
  const handlePressItem = (name: string) => {
    console.log(`Device Clicked -> Device Name: ${name}`);
  };
  return (
    <ScrollView>
      {/* <Header navigation={navigation} title="Printers" /> */}

      <View style={{backgroundColor: 'white'}}>
        <Nav navigation={navigation} />
      </View>

      <Section title="Printers" mode="default">
        {printers.map((item: Printer) => (
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

export default PrintersPage;
