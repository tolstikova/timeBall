import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {atan2, polarToCartesian} from "../helpers/F";
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { Value, event, block, cond, eq, set, add, sub, multiply, sin, cos, debug } from 'react-native-reanimated';


export default ({ radius, style, getAngle }) => {
  // const start = polarToCartesian(angle*2, angle*2, radius, angle);
  // const end = polarToCartesian(cx, cy, radius, start_angle);

  // console.log(angle);
  const angle = new Value(0);
  const α = new Value(0);
  const x = new Value(0);
  const y = new Value(0);
  const xOffset = new Value(0);
  const yOffset = new Value(0);
  const translateX = new Value(0);
  const translateY = new Value(0);
  const translationX = new Value(0);
  const translationY = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const onGestureEvent = event(
    [
      {
        nativeEvent: {
          translationX,
          translationY,
          state,
        },
      },
    ],
  );

  // useEffect(() => {
  //   getAngle(() => '555');
  // });

  return (
    <View style={style}>
      <Animated.Code>
        {
          () => block([
            cond(eq(state, State.ACTIVE), [
              set(x, add(xOffset, translationX)),
              set(y, add(yOffset, translationY)),
            ]),
            cond(eq(state, State.END), [
              set(xOffset, x),
              set(yOffset, y),
            ]),
            set(α, atan2(add(multiply(y, -1), radius), sub(x, radius))),
            set(angle, α),
            set(translateX, add(multiply(radius, cos(α)), radius)),
            set(translateY, add(multiply(-1 * radius, sin(α)), radius)),
          ])
        }
      </Animated.Code>
      <PanGestureHandler onHandlerStateChange={onGestureEvent} {...{ onGestureEvent }}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "white",
            width: 24,
            height: 24,
            borderRadius: 12,
            transform: [
              { translateX },
              { translateY },
            ],
          }}
        />
      </PanGestureHandler>
    </View>
  );
};
