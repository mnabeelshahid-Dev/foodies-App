import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import styles from './style';
import Colors from '../../../themes/Colors';
import {TextInput} from 'react-native-gesture-handler';
import {wp, hp} from '../../../helpers/responsiveText';
import createFood from '../../../redux/actions/foodAction';

const Home = (props) => {
  const [search, setSearch] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.createFood();
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style = {{top:3}} onPress={() => props.navigation.navigate('login')}>
        <Icon
          name="arrowleft"
          type="antdesign"
          color={Colors.Primary}
          size={30}
          style={styles.headerIcon}
        />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Sydney CBD</Text>
        </View>
      </View>
      <View style={styles.inputFieldContainer}>
        <TouchableOpacity style={{left: wp(7)}} onPress={()=>Alert.alert('fetch data from firebse store is working')}>
          <Icon
            name="search"
            type="fontawesome5"
            color={Colors.Placeholder}
            size={20}
            style={styles.inputIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={Colors.Placeholder}
          autoCorrect={true}
          style={styles.inputField}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search for restaurants ..."
          value={search}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainSchrolContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          horizontal={true}
          style={{flexWrap: 'wrap', flex: 1}}>
          {props?.dataSource?.imageArr.map((item) => {
            return (
              <View key={item.id} style={styles.topCardContainer}>
                <ImageBackground
                  source={item.source}
                  style={styles.imageBackground}>
                  <View style={styles.imageBackgroundText}>
                    <Text
                      style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
                      {item.foodType}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: hp(1),
                      }}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: Colors.Placeholder,
                        }}>
                        {item.quantity}
                      </Text>
                      <Text
                        style={{
                          fontSize: 26,
                          fontWeight: 'bold',
                          color: Colors.Placeholder,
                        }}>
                        . . . .
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.popularTextContainer}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Most Popular</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.SecondaryText,
            }}>
            See All
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            flex: 1,
            padding: 5,
          }}>
          {props.dataSource.cardArr.map((card) => {
            return (
              <View key={card.id} style={styles.popularCard}>
                <View style={styles.popularCardImageContainer}>
                  <Image style={styles.popularCardImage} source={card.source} />
                </View>
                <View style={styles.popularCardTextContainer}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    {card.brand}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: Colors.Placeholder,
                    }}>
                    {card.location}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: Colors.Placeholder,
                      bottom: 5,
                    }}>
                    {card.foodType}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.popularTextContainer}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Meal Deals</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.SecondaryText,
            }}>
            See All
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            flex: 1,
            padding: 5,
          }}>
          {props?.dataSource?.imageArr.map((item) => {
            return (
              <View key={item.id} style={styles.longCard}>
                <ImageBackground
                  style={styles.longCardImage}
                  source={item.source}>
                  <View style={styles.longCardTextContainer}>
                    <Text
                      style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
                      {item.foodType}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: Colors.Placeholder,
                      }}>
                      {item.quantity}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({homeReducer}) => {
  return {
    dataSource: homeReducer,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     createFood: () => {
//       dispatch(createFood());
//     },
//   };
// };
export default connect(mapStateToProps, null)(Home);
