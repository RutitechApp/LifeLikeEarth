import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const Container = ({children}) => {
  return (
    <View style={styles.container}>
      <View>
        {children}
      </View>
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    container : {
        flex  : 1,
        backgroundColor : colors.black,
        paddingHorizontal : 16
    }
})