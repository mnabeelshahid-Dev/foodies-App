import React, {useState} from 'react';
import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../../themes/Colors';
import firebase from '../../../config/firebaseConfig';
import styles from './style';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    alert('Login Successfully');
    setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => props.navigation.navigate('bottomTab', {email: res.email}))
      .catch((error) => setErrorMessage(error.message));
    setLoading(false);
    setEmail(''), setPassword('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.loginContainer}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Log in</Text>
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
        <TextInput
          placeholderTextColor={Colors.Placeholder}
          secureTextEntry={true}
          style={styles.inputField}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          value={password}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('resetPassword')}
        style={styles.forgetTextCotainer}>
        <Text
          style={{
            color: Colors.SecondaryText,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Forget password?
        </Text>
      </TouchableOpacity>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('createAccount')}
        style={styles.signUpTextCotainer}>
        <Text
          style={{
            color: Colors.SecondaryText,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Sign up Your Account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
