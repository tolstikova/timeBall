import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'react-native-blur';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  Line,
  Text
} from 'react-native-svg';

import styles from './styles';
import Colors from 'themes/Colors';

const LINES_MAIN_COLOR = Colors.pink;
const LINES_COLOR = Colors.black;
const LINES_STROKE = 0.3;

const BackgroundCircle = ({ scale }) => {
  return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>

        <Svg height={`${100*scale}%`} width={`${100*scale}%`} viewBox="0 0 100 100" style={{ backgroundColor: 'transparent' }}>
          <Defs>
            <LinearGradient id="grad" cx="100" cy="75" rx="85" ry="55" fx="100" fy="100">
              <Stop offset="0" stopColor={Colors.whiteGray} stopOpacity="0.2" />
              <Stop offset="1" stopColor={Colors.black} stopOpacity="0.4" />
            </LinearGradient>
          </Defs>
          <Circle cx={50} cy={50} r={45} fill="url(#grad)" />
        </Svg>

        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
        />

        <Svg height={`${100*scale}%`} width={`${100*scale}%`} viewBox="0 0 100 100" style={{ backgroundColor: 'transparent', position: 'absolute' }}>
          <Circle cx={50} cy={50} r={42} fill={Colors.white} />

          <Line x1="10" y1="50" x2="12" y2="50" stroke={LINES_MAIN_COLOR} strokeWidth={LINES_STROKE} />
          <Line x1="90" y1="50" x2="87" y2="50" stroke={LINES_MAIN_COLOR} strokeWidth={LINES_STROKE} />

          <Line x1="50" y1="10" x2="50" y2="12" stroke={LINES_MAIN_COLOR} strokeWidth={LINES_STROKE} />
          <Line x1="50" y1="90" x2="50" y2="87" stroke={LINES_MAIN_COLOR} strokeWidth={LINES_STROKE} />


          <Text x="80" y="51" style={{fontFamily:'Roboto-Thin', fontSize: 5}}>{3}</Text>
          <Text x="49" y="82" style={{fontFamily:'Roboto-Thin', fontSize: 5}}>{6}</Text>
          <Text x="17" y="51" style={{fontFamily:'Roboto-Thin', fontSize: 5}}>{9}</Text>
          <Text x="49" y="20" style={{fontFamily:'Roboto-Thin', fontSize: 5}}>{12}</Text>


        </Svg>






      </View>
  );
};

export default BackgroundCircle;
