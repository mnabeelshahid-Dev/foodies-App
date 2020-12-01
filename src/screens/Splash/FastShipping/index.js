import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
const fastShippingImage = require('../../../assets/images/fast.png');

const FastShipping = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={fastShippingImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fast Shiping</Text>
        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>
          Linear System Theory, Second Edition, outlines the basic
          theory,outlines the basic theory.
        </Text>
      </View>
      <View style={styles.loginContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('login')}
          style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FastShipping;
