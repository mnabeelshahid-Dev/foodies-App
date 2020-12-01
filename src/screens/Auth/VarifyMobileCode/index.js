import React, {useState} from 'react';
import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {wp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';
import styles from './style';
import ConfirmPhoneInput from './confirmPhoneInput';

const VarifyMobileCode = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.loginContainer}>
        <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>
          Verify your Mobile
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: Colors.Placeholder,
            marginTop: wp(2),
          }}>
          Enter Your Code here
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <ConfirmPhoneInput />
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('bottomTab')}
          style={styles.loginButton}>
          <Text style={styles.loginText}>Varify Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VarifyMobileCode;
