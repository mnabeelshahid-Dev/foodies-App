import React, {useState} from 'react';
import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import firebase from '../../../config/firebaseConfig';
import {hp, wp} from '../../../helpers/responsiveText';
import Colors from '../../../themes/Colors';
import styles from './style';
// import {connect} from 'react-redux';

const CreateAccount = (props) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    alert('Account Created Successfully');
    setLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) =>
        props.navigation.navigate('varifyMobileCode', {email: res.email}),
      )
      .catch((error) => setErrorMessage(error.message));
    setLoading(false);
    setUserName(''), setEmail(''), setPassword('');
  }

  // function handleNavigation({props}) {
  //   return props.navigation.navigate('varifyMobileCode');
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Text> {loading}...</Text>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.loginContainer}>
        <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>
          Welcome to Foodies
        </Text>
        <Text
          style={{fontSize: 17, fontWeight: 'bold', color: Colors.Placeholder}}>
          Create your Account
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={Colors.Placeholder}
          autoCorrect={true}
          style={styles.inputField}
          onChangeText={(text) => setUserName(text)}
          placeholder="User Name"
          value={userName}
        />
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
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.loginButton}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.termTextCotainer}>
        <Text
          style={{
            color: Colors.SecondaryText,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Term and Conditions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('login')}
        style={styles.loginToTextCotainer}>
        <Text
          style={{
            color: Colors.SecondaryText,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Login Your Account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// const mapStateToProps = ({authReducer}) => {
//   return {
//     data: [...authReducer.dataSource],
//   };
// };
export default CreateAccount;
