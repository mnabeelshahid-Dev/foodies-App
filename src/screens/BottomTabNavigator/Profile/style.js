import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp(100),
    width: wp(100),
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginButton: {
    height: hp(7),
    width: wp(70),
    borderRadius: 6,
    borderColor: Colors.borderColor,
    backgroundColor:'#67C5CD' ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color:'#fff',
    fontWeight: 'bold',
    fontSize:18
  },
  loginButtonContainer:{
    height: hp(41),
    width: wp(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop:hp(4)
  },
  
});
export default styles;