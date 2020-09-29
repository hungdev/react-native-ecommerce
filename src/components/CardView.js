import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { Fonts, Metrics, Colors } from '../themes'


export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    // margin: Metrics.smallMargin,
    // borderColor: Colors.border,
    borderRadius: 4,
    borderBottomWidth: 0.5,
    padding: Metrics.smallMargin,
    backgroundColor: Colors.card,
    borderColor: Colors.transparent,
    // marginBottom: Metrics.smallMargin
    borderWidth: 1
  }
})