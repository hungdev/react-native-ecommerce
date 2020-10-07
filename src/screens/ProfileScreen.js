import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics } from '../themes';
import CartView from '../components/CardView'
import Hr from '../components/Hr'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={{ margin: 18 }}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>Hello, Hung</Text>
      </View>
      <CartView style={{ padding: 10 }}>
        <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text>My Orders</Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>Order Information</Text>
          </View>
          <Ionicons name='chevron-forward' size={20} />
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.baseMargin} marginBottom={Metrics.baseMargin} />
        <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text>Profile</Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>Manage name, email, password</Text>
          </View>
          <Ionicons name='chevron-forward' size={20} />
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.baseMargin} marginBottom={Metrics.baseMargin} />
        <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text>Address Book</Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>Manage shipping abd billing address</Text>
          </View>
          <Ionicons name='chevron-forward' size={20} />
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.baseMargin} marginBottom={Metrics.baseMargin} />
        <TouchableOpacity style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text>Wallet</Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>Manage payment type method</Text>
          </View>
          <Ionicons name='chevron-forward' size={20} />
        </TouchableOpacity>
      </CartView>

      <CartView style={{ marginTop: 20, paddingLeft: 10, marginBottom: 10 }}>
        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <Text>Help & support</Text>
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.smallMargin} marginBottom={Metrics.smallMargin} />
        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <Text>Shipping Info</Text>
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.smallMargin} marginBottom={Metrics.smallMargin} />
        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <Text>Find a store</Text>
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.smallMargin} marginBottom={Metrics.smallMargin} />
        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <Text>Careers at forever21</Text>
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.smallMargin} marginBottom={Metrics.smallMargin} />
        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <Text>Rate our app</Text>
        </TouchableOpacity>
      </CartView>

      <TouchableOpacity
        style={{
          backgroundColor: '#FFF',
          marginTop: 15, width: '90%',
          borderWidth: 1,
          // borderRadius: 20,
          paddingVertical: 12,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 20
        }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>CHECKOUT</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
