import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import Colors from '../../../themes/Colors';
import {hp, wp} from '../../../helpers/responsiveText';
import {Icon} from 'react-native-elements';

const orderCounter = require('../../../assets/images/order.jpg');
const locationImage = require('../../../assets/images/mapLocation.png');

const CurrentLocation = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={orderCounter} style={styles.backgroundImage}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <View style={styles.headerImageTextContainer}>
            <Text style={styles.headerImageText}>Black Smith Cafe</Text>
          </View>
          <TouchableOpacity style={styles.orderFoodButton}>
            <Text style={styles.orderFoodText}>Order Food Online</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Icon name="export" type="antdesign" color="#000" size={30} />
            <Text>Share</Text>
          </View>
          <View style={styles.icon}>
            <Icon name="staro" type="antdesign" color="#000" size={30} />
            <Text>Review</Text>
          </View>
          <View style={styles.icon}>
            <Icon name="camerao" type="antdesign" color="#000" size={30} />
            <Text>Photo</Text>
          </View>
        </View>
        <ImageBackground
          source={locationImage}
          style={styles.backgroundLocationImage}>
          <View style={styles.ImageLeftContainer}>
            <Text style={styles.locationText}>123 Queen Street, Sydney</Text>
            <Text style={styles.locationText}>Pakistani Cafe</Text>
            <Text style={styles.locationText}>11:30Am to 11pm</Text>
          </View>
          <TouchableOpacity style={styles.ImageRightContainer}>
            <Icon
              name="enviromento"
              type="antdesign"
              color={Colors.Primary}
              size={25}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.callContainer}>
          <View>
            <Text style={styles.callTextLeft}>Call</Text>
            <Text style={styles.callTextLeft}>Cuisian</Text>
            <Text style={styles.callTextLeft}>Average Cost</Text>
            <Text
              style={[
                styles.callTextLeft,
                {color: '#000', fontSize: 16, marginTop: wp(5)},
              ]}>
              Photos
            </Text>
          </View>
          <View>
            <Text style={styles.callTextRight}>(+61)48681264</Text>
            <Text style={[styles.callTextRight, {marginLeft: wp(4)}]}>
              Astrlian Cafe
            </Text>
            <Text style={[styles.callTextRight, {marginLeft: wp(8)}]}>
              $20 to $50
            </Text>
            <Text
              style={[
                styles.callTextRight,
                {fontSize: 16, marginTop: wp(5), marginLeft: wp(17)},
              ]}>
              + Add
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            flex: 1,
            padding: 5,
          }}>
          {props.data &&
            props.data.cardArr.map((card) => {
              return (
                <View key={card.id} style={styles.popularCard}>
                  <View style={styles.popularCardImageContainer}>
                    <Image
                      style={styles.popularCardImage}
                      source={card.source}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: wp(1),
                    }}>
                    <Text
                      style={{color: '#000', fontSize: 17, fontWeight: 'bold'}}>
                      {card.brand}
                    </Text>
                    <Text
                      style={{
                        color: Colors.Placeholder,
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      ({card.quantity})
                    </Text>
                  </View>
                </View>
              );
            })}
        </ScrollView>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
          Reviews
        </Text>
        {props.data &&
          props.data.profileArr.map((item) => {
            return (
              <View key={item.id} style={styles.userReviewContainer}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    height: hp(10),
                    width: wp(100),
                    flexDirection: 'row',
                    paddingTop: hp(3),
                    backgroundColor: '#fff',
                  }}>
                  <Image style={styles.userProfile} source={item.source} />
                  <View style={{marginRight: wp(10)}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Text
                      style={{fontWeight: 'bold', color: Colors.Placeholder}}>
                      45 Reviews, 210 flowers{' '}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderWidth: 2,
                      height: hp(5),
                      width: wp(20),
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: '#98C5CA',
                      marginRight: wp(5),
                    }}>
                    <Text style={{color: '#98C5CA'}}>Follow</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: hp(7),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: wp(50),
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Icon
                      name="star"
                      type="antdesign"
                      color={Colors.Primary}
                      size={20}
                    />
                    <Icon
                      name="star"
                      type="antdesign"
                      color={Colors.Primary}
                      size={20}
                    />
                    <Icon
                      name="star"
                      type="antdesign"
                      color={Colors.Primary}
                      size={20}
                    />
                    <Icon
                      name="star"
                      type="antdesign"
                      color={Colors.Primary}
                      size={20}
                    />
                    <Icon
                      name="staro"
                      type="antdesign"
                      color={Colors.Primary}
                      size={20}
                    />
                    <Text style={{color: Colors.Primary}}>4.0</Text>
                  </View>
                  <Icon
                    name="thumbs-up"
                    type="feather"
                    color={Colors.Primary}
                    size={20}
                    style={{marginLeft: hp(10)}}
                  />
                  <Icon
                    name="message-circle"
                    type="feather"
                    color="#000"
                    size={20}
                  />
                </View>
                <View
                  style={{
                    width: wp(88),
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: hp(3),
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: Colors.Placeholder,
                    }}>
                    I enjoyed the food of the restaueant. The dishes are
                    attractive and very beautiful.Good food luxurious space and
                    Services. I will be backin the... Read more
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                  style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    flex: 1,
                    padding: 5,
                  }}>
                  {props.data &&
                    props.data.cardArr.map((card) => {
                      return (
                        <View key={card.id} style={styles.popularCard}>
                          <View style={styles.popularCardImageContainer}>
                            <Image
                              style={styles.popularCardImage}
                              source={card.source}
                            />
                          </View>
                        </View>
                      );
                    })}
                </ScrollView>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({locationReducer}) => {
  return {
    data: locationReducer,
  };
};

export default connect(mapStateToProps, null)(CurrentLocation);
