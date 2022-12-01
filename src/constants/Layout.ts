import { Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Dimensions.get('window').height;

export { deviceWidth, deviceHeight }
