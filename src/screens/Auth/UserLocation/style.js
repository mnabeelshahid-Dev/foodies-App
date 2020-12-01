import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(100),
    width: wp(100),
    backgroundColor: '#fff',
  },
  mainSchrolContainer: {
    height: hp(100),
    width: wp(100),
  },
  header: {
    height: hp(6),
    width: wp(100),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerTextContainer: {
    width: wp(70),
    height: hp(6),
    justifyContent: 'center',
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerIcon: {
    width: wp(30),
    height: hp(6),
    flexDirection: 'row',
    paddingLeft: wp(3),
  },
  mainSchrolContainer: {
    height: hp(100),
    width: wp(100),
  },
  countryList:{
    height: hp(8),
    width: wp(90),
    padding: 10,
    paddingTop: wp(6),
    borderBottomColor: Colors.Border,
    borderBottomWidth: 2,
    paddingHorizontal: wp(10),
  }
});
export default styles;