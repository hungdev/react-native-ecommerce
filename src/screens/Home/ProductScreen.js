import React from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ProductList from './ProductList';
import { Colors } from '../../themes';

export default function HomeScreen() {
  return (
    <ScrollableTabView
      style={{ paddingTop: 5, backgroundColor: Colors.white }}
      initialPage={0}
      scrollWithoutAnimation={true}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <ProductList tabLabel='All' />
      <ProductList tabLabel='Woman' />
      <Text tabLabel='Tab #3 word word word'>project</Text>
      <Text tabLabel='Tab #4 word word word word'>favorite</Text>
      <Text tabLabel='Tab #5'>project</Text>
    </ScrollableTabView>
  )
}
