import React, {FC, useEffect, useState} from 'react';
import {View, ScrollView, NativeModules} from 'react-native';
import {printers, Printer} from '../../data/fake_data';
import Item from '../../components/item/item.component';
import Section from '../../components/section/section.component';
import Nav from '../../components/nav/nav.component';
import Header from '../../components/header/header.component';

type TImage = {
  content: [];
  directory: string;
};

const PrintersPage: FC<{navigation: any}> = ({navigation}) => {
  const [printersList, setPrintersList] = useState<string[]>([]);
  const [images, setImages] = useState<TImage>({content: [], directory: ''});

  useEffect(() => {
    NativeModules.Printers.getList().then(setPrintersList);
    NativeModules.Printers.getImages((res: any) => setImages(res));
  }, []);

  const handlePressItem = (name: string) => {
    console.log(name);
  };

  return (
    <ScrollView>
      <Header navigation={navigation} title="Printers" />
      <View style={{backgroundColor: 'black'}}>
        <Nav navigation={navigation} />
      </View>

      <Section title="Printers" mode="row">
        {printers.map((item: Printer) => (
          <Item key={item.id} {...item} onPress={handlePressItem} />
        ))}
      </Section>
      <Section title="Printers from C# module" mode="row">
        {printersList.map((item, key) => (
          <Item
            key={key}
            src={{
              uri: `${images.directory}\\${images.content.find(
                (name: string) => {
                  const words = item.split(' ');
                  return name.includes(words[words.length - 1].toLowerCase());
                },
              )}`,
            }}
            name={item}
            onPress={handlePressItem}
          />
        ))}
      </Section>
    </ScrollView>
  );
};

export default PrintersPage;
