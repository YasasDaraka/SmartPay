import React from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';

interface circleProps{
    img:any
    imgClass:any
    className:any
    onPress:any
}
export default function Circle(props:any) {
  return (
    <View className={props.className}>
        <TouchableOpacity>
        {/* (img ? <Image className={props.className}source={props.img}></Image>) */}
        </TouchableOpacity>
    </View>
  )
}
Circle.prototype={
    img:PropTypes.any,
    imgClass:PropTypes.any,
    style:PropTypes.any,
    onPress:PropTypes.any
}
