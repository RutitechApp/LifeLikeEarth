import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const Container = ({children}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style = {styles.safeContainer}>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    container : {
        flex  : 1,
        backgroundColor : colors.black,
        paddingHorizontal : 16
    },
    safeContainer : {
        flex : 1
    }
})