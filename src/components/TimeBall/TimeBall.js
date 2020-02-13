import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import styles from './styles';
import Colors from 'themes/Colors';

const TimeBall = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle cx={50} cy={50} r={50} fill={Colors.white} />

          <G rotation={80} origin='10,80' scale={2}>
            <Defs>
              <LinearGradient id="grad" cx="100" cy="75" rx="85" ry="55" fx="100" fy="100">
                <Stop offset="0" stopColor={Colors.whiteGray} stopOpacity="0" />
                <Stop offset="1" stopColor={Colors.black} stopOpacity="0.4" />
              </LinearGradient>
            </Defs>
          </G>
          <Circle cx={50} cy={50} r={45} fill="url(#grad)" />
          <Circle cx={50} cy={50} r={42} fill={Colors.white} />

        </Svg>




      </View>
    </SafeAreaView>
  );
};

export default TimeBall;
