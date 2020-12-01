import {StyleSheet} from 'react-native';
import {wp, hp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BackgroundAuth,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default styles;
