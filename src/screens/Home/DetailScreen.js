import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Metrics, Colors } from '../../themes';
const sizes = ['S', "M", "L", 'XL']
export default function DetailScreen() {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="heart" size={30} color={'grey'}
          style={{ position: 'absolute', top: 20, right: 20, }}
        />
      </TouchableOpacity>
      <Image source={{ uri: 'https://www.forever21.com/images/default_330/00421842-01.jpg' }}
        style={{ width: '100%', height: 360, resizeMode: 'contain' }} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Woman red top</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Metrics.baseMargin }}>
          <Text style={{
            marginRight: Metrics.smallMargin,
            fontWeight: 'bold'
          }}>500k</Text>
          <Text style={{ textDecorationLine: 'line-through', color: 'grey' }}>1000k</Text>
          <Text style={{ borderWidth: 1, padding: 5, marginLeft: Metrics.baseMargin, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
            50%
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          paddingHorizontal: 40,
          marginTop: 10
        }}>
          {sizes.map((e, i) => (
            <TouchableOpacity key={i}
              style={{ borderRadius: 20, borderWidth: 1, padding: 10, height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text>{e}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF5254',
            marginTop: 15, width: '60%', borderWidth: 1,
            borderRadius: 20, paddingVertical: 12,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD TO BAG</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}
