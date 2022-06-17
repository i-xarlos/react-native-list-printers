import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  TouchableHighlight,
  Image,
} from 'react-native';
import {ImageSourcePropType} from 'react-native-windows';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type ItemProps = {
  name: string;
  src?: string;
  onPress?: (name: string) => void;
};

const Item: React.FC<ItemProps> = ({name, src, onPress = () => {}}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableHighlight
      style={styles({isDarkMode}).button}
      onPress={() => onPress(name)}>
      <>
        {src && src !== '' && (
          <Image style={styles({}).image} source={src as ImageSourcePropType} />
        )}
        <Text style={styles({isDarkMode}).buttonText}>{name}</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = (props?: any) => {
  return StyleSheet.create({
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
      backgroundColor: props.isDarkMode ? Colors.darker : Colors.lighter,
      borderWidth: 1,
      borderColor: props.isDarkMode ? Colors.lighter : Colors.darker,
    },
    buttonText: {
      color: props.isDarkMode ? Colors.white : Colors.black,
      fontSize: 18,
    },
    image: {
      height: 100,
      resizeMode: 'contain',
      marginVertical: 10,
    },
  });
};

export default Item;
