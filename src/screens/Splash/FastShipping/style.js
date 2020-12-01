import {StyleSheet} from 'react-native';
import {wp, hp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
  },
  loginContainer: {
    height: hp(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp(20),
    paddingBottom: wp(30),
  },
  loginButton: {
    height: hp(6),
    width: wp(90),
    borderRadius: 6,
    borderColor: Colors.borderColor,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color:'black',
    fontWeight: 'bold',
  },
  imageContainer: {
    height: hp(40),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: hp(20),
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    paddingVertical: wp(8),
  },
});
export default styles;
