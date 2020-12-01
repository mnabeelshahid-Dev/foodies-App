import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
const varietyImage = require('../../../assets/images/variety.png');

const VarietyFood = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={varietyImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Variety of Food</Text>
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

export default VarietyFood;
