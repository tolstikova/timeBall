import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import Dots from "./Dots";
import Slider from "./Slider";
import Cursor from "./Cursor";
import {Value} from "react-native-reanimated";

const SCALE = 1.8;
const INNER_SCALE = 2.8;
const OUT_SCALE = 1.8;


export default () => {
  const start = 80;
  // const start_angle = new Value(0);
  // const [angle, setAngle] = useState(start_angle);

  // useEffect(() => {
  //   console.log(start_angle);
  //   start_angle.setValue(100);
  // });



    return (
      <View style={{ paddingVertical: 100 }}>
        <NeomorphBox
          style={{
            shadowRadius: 3*OUT_SCALE,
            borderRadius: 100*OUT_SCALE,
            backgroundColor: '#f0f0f0',
            width: 190*OUT_SCALE,
            height: 190*OUT_SCALE,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NeomorphBox
            inner
            style={{
              shadowRadius: 7*SCALE,
              borderRadius: 90*SCALE,
              backgroundColor: '#daf5dc',
              width: 180*SCALE,
              height: 180*SCALE,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <NeomorphBox
              style={{
                shadowRadius: 7*INNER_SCALE,
                borderRadius: 50*INNER_SCALE,
                backgroundColor: '#f0f0f0',
                width: 100*INNER_SCALE,
                height: 100*INNER_SCALE,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Slider
                radius={160}
                start_angle={0}
                end_angle={150}
              />

              <Cursor
                radius={150}
                getAngle={(v) => console.log(v)}
                style={{
                  position: 'absolute',
                  zIndex: 5,
                  top: -22,
                  left: -22,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              />


              <NeomorphBox
                inner
                style={{
                  shadowRadius: 3*INNER_SCALE,
                  borderRadius: 45*INNER_SCALE,
                  backgroundColor: '#f0f0f0',
                  width: 90*INNER_SCALE,
                  height: 90*INNER_SCALE,
                }}
              />
            </NeomorphBox>
          </NeomorphBox>
        </NeomorphBox>
        <Dots numberDots={12} radius={180} unit={30} />
      </View>
    )
}


