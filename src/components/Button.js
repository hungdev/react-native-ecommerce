import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../themes'

export default class FullButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
        <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.black,
    textAlign: 'center'
  }
})