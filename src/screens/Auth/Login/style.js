import {StyleSheet} from 'react-native';
import { hp, wp } from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp(100),
    width: wp(100),
  },
  loginContainer:{
    height: hp(25),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
    height: hp(20),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField:{
    height: hp(7),
    width: wp(95),
    borderBottomWidth: 2,
    borderBottomColor: Colors.Border,
    paddingHorizontal: wp(5),
    fontWeight: 'bold',
    color: Colors.Placeholder,
    fontSize:20
  },
  forgetTextCotainer:{
    height: hp(4),
    width: wp(100),
    flexDirection: 'row-reverse',
    paddingHorizontal: wp(8),
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginButton: {
    height: hp(7),
    width: wp(90),
    borderRadius: 6,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.Primary,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:hp(4)
  },
  signUpTextCotainer:{
    justifyContent:'flex-end',
    alignItems:'center',
    paddingHorizontal: wp(8),
    paddingBottom:wp(10)
  },
});
export default styles;
