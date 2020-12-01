import React, {Component} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import FastShipping from '../FastShipping';
import QuickSearch from '../QuickSearch';
import SearchPlace from '../SearchPlace';
import VarietyFood from '../VarietyFood';
import Colors from '../../../themes/Colors';
import style from './style';

class Splash extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor={Colors.Primary} />
          <Swiper style={style.wrapper} showsButtons={false} horizontal={true}>
            <View style={style.slide}>
              <QuickSearch navigation={this.props.navigation} />
            </View>
            <View style={style.slide}>
              <VarietyFood navigation={this.props.navigation} />
            </View>
            <View style={style.slide}>
              <SearchPlace navigation={this.props.navigation} />
            </View>
            <View style={style.slide}>
              <FastShipping navigation={this.props.navigation} />
            </View>
          </Swiper>
        </SafeAreaView>
      </>
    );
  }
}
export default Splash;
