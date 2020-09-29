import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import Hr from '../components/Hr'
import { Colors, Metrics } from '../themes';

export default function SortModal(props) {
  const toggleModal = () => { props.toggleModal() }
  return (
    <Modal
      hasBackdrop={true}
      testID={'modal'}
      isVisible={props.isVisible}
      onBackdropPress={toggleModal}
      // onSwipeComplete={toggleModal}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={{ justifyContent: 'flex-end', margin: 0 }}>
      <View style={styles.content}>
        <Text style={{ color: 'red' }}>SORT BY</Text>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.baseMargin} marginBottom={Metrics.baseMargin} />
        <TouchableOpacity style={{ marginVertical: Metrics.smallMargin }}>
          <Text>New Arrival</Text>
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.baseMargin} marginBottom={Metrics.baseMargin} />
        <TouchableOpacity style={{ marginVertical: Metrics.smallMargin }}>
          <Text>Price: Low to hight</Text>
        </TouchableOpacity>
        <Hr lineHeight={1} marginLeft={0} marginRight={0} lineColor={Colors.divider} marginTop={Metrics.baseMargin} marginBottom={Metrics.baseMargin} />
        <TouchableOpacity style={{ marginVertical: Metrics.smallMargin }}>
          <Text>Price: Hight to low</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingVertical: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
