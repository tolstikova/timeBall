import React, { useState } from 'react'
import {
  View,
  Animated
} from 'react-native'


const dot = (distance, radius, unit) => {
  const [fadeAnim] = useState(new Animated.Value(100));

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 2000,
      }
    ).start();
  }, []);


  return (
    <Animated.View style={{ padding: 0 }} >
    <View
      style={{
        backgroundColor: '#081f14',
        width: 5,
        height: 5,
        borderRadius: 2.5,
        position: 'absolute',
        top: Math.sin((distance*unit) * Math.PI / 180) * radius - radius + 6,
        right: 0,
        left: Math.cos((distance*unit) * Math.PI / 180) * radius,
        bottom: 0
      }}/>
  </Animated.View>
  )
};


const Dots = ({ numberDots, radius, unit }) => {
  const dotsContainer = [];
  for(let i=0; i < numberDots; i++){
    dotsContainer.push(dot(i, radius, unit))
  };

console.log(dotsContainer);
  return <View style={{ justifyContent: 'center', alignItems: 'center', }} >{dotsContainer}</View>
};

export default Dots;
