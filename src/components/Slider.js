import React from 'react'
import { View, PanResponder } from 'react-native'
import Svg, {
  Path,
  Circle
} from 'react-native-svg';
import { polarToCartesian } from '../helpers/F'
import Cursor from './Cursor';
import { PanGestureHandler} from 'react-native-gesture-handler';




const Slider = ({ radius, cx, cy, thickness, end_angle, start_angle, fill, cursorsFill }) => {
  const start = polarToCartesian(cx, cy, radius, end_angle);
  const end = polarToCartesian(cx, cy, radius, start_angle);
  const largeArcFlag = end_angle - start_angle <= 180 ? "0" : "1";

  const cutout_radius = radius - thickness;
  const start2 = polarToCartesian(cx, cy, cutout_radius, end_angle);
  const end2 = polarToCartesian(cx, cy, cutout_radius, start_angle);

  const d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "L", cx, cy,
    "Z",

    "M", start2.x, start2.y,
    "A", cutout_radius, cutout_radius, 0, largeArcFlag, 0, end2.x, end2.y,
    "L", cx, cy,
    "Z"
  ].join(" ");


  const _onPanGestureEvent = console.log('qqq');


      return (
        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>

          <Svg width="500" height="500">


            <Path
              d={d}
              fill={fill}
              fillRule="evenodd"
            />



            <Circle
              cx={start.x}
              cy={start.y - 12}
              r={12}
              fill={cursorsFill}
            />


            <Circle
              cx={end.x}
              cy={end.y + 10}
              r={12}
              fill={cursorsFill}
            />


          </Svg>






        </View>
      )
};

Slider.defaultProps = {
  cx: 250,
  cy: 250,
  radius: 160,
  start_angle: 0,
  end_angle: 150,
  thickness: 20,
  fill: "#23f55c",
  cursorsFill: "#f0f0f0"
};

export default Slider;
