import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    height: hp(38),
    width: wp(100),
  },
  headerImageTextContainer: {
    flex: 1,
    width: wp(50),
    justifyContent: 'flex-end',
    paddingLeft: wp(5),
    paddingBottom: wp(5),
  },
  headerImageText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  orderFoodButton: {
    backgroundColor: Colors.Primary,
    flex: 0.25,
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderFoodText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconContainer: {
    height: hp(12),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundLocationImage: {
    height: hp(15),
    flexDirection: 'row',
  },
  ImageLeftContainer: {
    height: hp(14),
    width: wp(60),
    justifyContent: 'center',
    paddingLeft: wp(8),
  },
  locationText: {
    color: Colors.Placeholder,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ImageRightContainer: {
    height: hp(12),
    width: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  callContainer: {
    height: hp(18),
    width: wp(100),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wp(2),
  },
  callTextLeft: {
    color: Colors.Placeholder,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: wp(8),
  },
  callTextRight: {
    color: Colors.SecondaryText,
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: wp(8),
  },
  popularCard: {
    marginHorizontal: 5,
    height: hp(20),
    width: wp(22),
    borderRadius: 10,
    marginVertical: 10,
  },
  popularCardImage: {
    height: hp(12),
    width: wp(22),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  userReviewContainer: {
    width: wp(100),
    height: hp(50),
    borderBottomColor:Colors.Placeholder,
    borderBottomWidth:1
  },
  userProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: wp(3),
  },
  
});
export default styles;
