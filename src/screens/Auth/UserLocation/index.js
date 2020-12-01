import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './style';
import Colors from '../../../themes/Colors';
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from 'react-native-country-picker-modal';
import {hp, wp} from '../../../helpers/responsiveText';

const UserLocation = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={Colors.Primary}
            size={30}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>User Location</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.countryList}>
          <CountryPicker
            withFilter={true}
            renderCountryFilter={props.navigation.navigate('bottomTab')}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserLocation;
