import React, {useState} from 'react';
import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {wp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';
import styles from './style';
import firebase from '../../../config/firebaseConfig';

const ResetPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleResetPassword() {
    alert('Check your mail to reset password');
    setLoading(true);
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((res) => props.navigation.navigate('login'))
      .catch((error) => setErrorMessage(error.message));
    setLoading(false);
    setEmail('');
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.loginContainer}>
        <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>
          Reset Password?
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: Colors.Placeholder,
            marginTop: wp(2),
          }}>
          please enter your email
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={Colors.Placeholder}
          autoCorrect={true}
          style={styles.inputField}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          value={email}
        />
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          onPress={handleResetPassword}
          style={styles.loginButton}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
