import { v4 as uuidv4 } from 'uuid';
import Hash from '../images/hash.png';
import BeanAround from '../images/image6.png';
import GtmHub from '../images/image7.png';
import DProtect from '../images/image8.png';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'BeanAround Cafe',
    desc: 'Product Design of a new opening cafe named "Beanround Cafe" ',
    img: BeanAround,
    lank: 'https://www.behance.net/omkumar20cs105',
  },
  {
    id: uuidv4(),
    name: 'GtmHub',
    desc: 'A Dashboard that is used track your daily data insights along with the facilities to store your money in wallets',
    img: GtmHub,
  },
  {
    id: uuidv4(),
    name: 'DProtect',
    desc: 'Using this app you can store diffrent information in decentralized way',
    img: DProtect,
  },
  {
    id: uuidv4(),
    name: "Om's Portfolio",
    desc: 'The portfolio is made using ReactJs, React Hooks and many more.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Hash Application',
    desc: 'Hash functions, also known as hash algorithms, create digital fingerprints and signatures. A hash function maps arbitrary strings. It breaks it up. Developed by using React and its packages',
    img: Hash,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
