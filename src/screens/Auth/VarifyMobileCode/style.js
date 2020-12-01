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
    width: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
    height: hp(15),
    width: wp(100),
    paddingHorizontal:wp(30)
  },
  inputField:{
    height: hp(7),
    width: wp(95),
    borderBottomWidth: 2,
    borderBottomColor: Colors.Border,
    paddingHorizontal: wp(5),
    fontWeight: 'bold',
    color: Colors.Placeholder,
    fontSize:16
  },
  termTextCotainer:{
    height: hp(60),
    width: wp(100),
    justifyContent:'flex-start',
    paddingHorizontal: wp(8),
    alignItems:'center',
    paddingTop:hp(3)
  },
  loginToTextCotainer:{
    height: hp(25),
    width: wp(100),
    justifyContent:'flex-end',
    alignItems:'center',
    paddingHorizontal: wp(8),
    paddingBottom:wp(10)
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
    height: hp(60),
    width: wp(100),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default styles;
