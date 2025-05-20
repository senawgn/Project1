import React from 'react'
import { Image, } from 'react-native'

const ImageCustom = ({link}) => {
  return (
    <Image style={{width: 200, height:200}} source={{uri: link}} />
  )
}

export default ImageCustom