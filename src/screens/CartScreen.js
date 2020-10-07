import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics } from '../themes';
import CartView from '../components/CardView'

const images = [
  'https://www.forever21.com/images/default_330/00421842-01.jpg',
  'https://www.forever21.com/images/default_330/00410895-03.jpg',
  'https://www.forever21.com/images/default_330/00412718-02.jpg',
  'https://www.forever21.com/images/default_330/00415030-01.jpg',
  'https://www.forever21.com/images/default_330/00414874-01.jpg'
]
const data = Array(5).fill('').map((e, i) => ({ id: i + 1, image: images[i] || images[0], name: `item ${i}`, price: '100.000', star: 4 }))

export default function CartScreen() {

  const renderItem = ({ item }) => {
    return (
      <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, }} />
        <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price}</Text>
                <Text style={{ fontSize: 19, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price}</Text>
              </View>
              <Text style={{ textAlign: 'center', width: 50, borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
                50%
              </Text>
            </View>
            <Ionicons name="ios-trash-outline" size={30} color={Colors.black} />
          </View>
        </View>
      </CartView>
    );
  };

  const footer = () => {
    return (
      <View>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 15 }}>Order Summary</Text>
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>Subtotal</Text>
              <Text>500,000</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>Discount</Text>
              <Text>100,000</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Total</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>500,000</Text>
            </View>
          </View>
        </View>
        <CartView style={{ marginTop: 10, paddingHorizontal: 10 }}>
          <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Promotion Code</Text>
            <Ionicons name='chevron-forward' size={20} />
          </TouchableOpacity>
        </CartView>

        <TouchableOpacity
          style={{
            backgroundColor: '#FF5254',
            marginTop: 15, width: '60%', borderWidth: 1,
            // borderRadius: 20,
            paddingVertical: 12,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 20
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>CHECKOUT</Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View>
      <FlatList
        style={{ backgroundColor: Colors.divider }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // extraData={}
        ListFooterComponent={footer}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  wishlistIcon: {
    marginRight: Metrics.smallMargin,
    position: 'absolute',
    top: Metrics.smallMargin,
    right: Metrics.smallMargin,
    zIndex: 1
  },

});
