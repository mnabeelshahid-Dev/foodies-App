import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import Colors from '../../../themes/Colors';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {hp, wp} from '../../../helpers/responsiveText';
const thaiFood1 = require('../../../assets/images/thai-food-padped.jpg');
const thaiFood2 = require('../../../assets/images/imagesy.png');

const RatedFood = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Fovourite</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: hp(100), width: wp(100)}}>
        {props.data &&
          props.data.cardArr.map((item) => {
            return (
              <View key={item.id} style={styles.cardContainer}>
                <Image style={styles.popularCardImage} source={item.source} />
                <View
                  style={{
                    width: wp(34),
                    height: hp(12),
                    margin: wp(4),
                    justifyContent: 'space-around',
                  }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {item.brand}
                  </Text>
                  <Text style={styles.cardText}>{item.time}</Text>
                  <Text style={styles.cardText}>{item.location}</Text>
                  <Text style={styles.cardText}>{item.foodType}</Text>
                </View>
                <View style={styles.cardBadgeContainer}>
                  <View
                    style={{
                      backgroundColor: Colors.Primary,
                      width: wp(15),
                      height: hp(4),
                      borderRadius: wp(1),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>4.8</Text>
                  </View>
                  <Icon
                    name={item.icon}
                    type="antdesign"
                    color="#55BABB"
                    size={25}
                    style={{marginLeft: wp(5)}}
                  />
                </View>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({rateReducer}) => {
  return {
    data: rateReducer,
  };
};

export default connect(mapStateToProps, null)(RatedFood);
