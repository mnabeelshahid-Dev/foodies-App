import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const quickSearchimage = require('../../../assets/images/quick.png');

const QuickSearch = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={quickSearchimage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Quick Search</Text>
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

export default QuickSearch;
