import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import Svg, {
  Circle,
  Ellipse,
  G,
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
import BackgroundCircle from '../BackgroundCircle/BackgroundCircle';

const SCALE = 0.9;

const TimeBall = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircle scale={SCALE} />




    </SafeAreaView>
  );
};

export default TimeBall;
