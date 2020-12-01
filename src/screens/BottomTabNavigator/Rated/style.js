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
  header: {
    height: hp(15),
    width: wp(100),
    borderBottomWidth: 2,
    borderBottomColor: Colors.Border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    height: hp(20),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.Border,
    borderBottomWidth: 1,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    flexDirection: 'row',
  },
  popularCardImage: {
    height: hp(14),
    width: wp(26),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardText: {fontSize: 12, fontWeight: 'bold', color: Colors.Placeholder},
  cardBadgeContainer: {
    width: wp(23),
    height: hp(15),
    justifyContent: 'space-between',
    paddingLeft: wp(10),
  },
});
export default styles;
