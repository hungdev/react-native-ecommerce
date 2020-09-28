import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from '../../themes';

export default function HomeScreen({ navigation }) {
  const onMoveProduct = () => navigation.navigate('Product')
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image source={Images.saleOffHome} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={onMoveProduct} style={{ flex: 1 }}>
          <Image source={Images.womanHome} style={{ flex: 1, height: '100%', width: '100%' }} resizeMode='cover' />
        </TouchableOpacity>
        <Image source={Images.manHome} style={{ flex: 1, height: '100%', width: '100%' }} resizeMode='cover' />
        <Image source={Images.kidHome} style={{ flex: 1, height: '100%', width: '100%' }} resizeMode='cover' />
      </View>
    </View>
  )
}
