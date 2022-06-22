import {ImageSourcePropType} from 'react-native-windows';
import laptop from '../assets/laptop.png';
import printer from '../assets/printer.png';
import laser from '../assets/multifunction-printer.png';
import scanner from '../assets/scanner.png';
import desktop from '../assets/pc.png';
import drive from '../assets/harddisk.png';
import drive1 from '../assets/harddisk1.png';
import drive2 from '../assets/harddisk2.png';

export type Printer = {
  name: string;
  src?: ImageSourcePropType;
  id: string;
};

export type Drive = {
  name: string;
  src?: ImageSourcePropType;
  id: string;
};

export const printers: Printer[] = [
  {
    name: 'HP Laptop',
    src: laptop,
    id: 'P001',
  },
  {name: 'HP Injet Printers', src: printer, id: 'P002'},
  {name: 'HP Laser Printer', src: laser, id: 'P003'},
  {name: 'HP Scanner', src: scanner, id: 'P004'},
  {name: 'HP Desktop', src: desktop, id: 'P005'},
];

export const drives: Drive[] = [
  {name: 'c', src: drive, id: 'D001'},
  {name: 'd', src: drive1, id: 'D002'},
  {name: 'h', src: drive2, id: 'D003'},
];
