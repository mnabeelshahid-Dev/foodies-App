import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import styles from './style';
import firebase from '../../../config/firebaseConfig';
const logout = require('../../../assets/images/logout.jpg');

const Profile = (props) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleLogOut() {
    alert('User Logout');
    setLoading(true);
    await firebase
      .auth()
      .signOut()
      .then((res) => props.navigation.navigate('login'))
      .catch((error) => setErrorMessage(error.message));
    setLoading(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={logout} style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogOut}>
            <Text style={styles.loginText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Profile;
