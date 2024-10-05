import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import iconConstants from '../../utils/iconConstants'
import { useNavigation } from '@react-navigation/native'
import navigationConstants from '../../utils/navigationConstants'

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Image source={iconConstants.notification} style={styles.ic_notification} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(navigationConstants.QUIZ)}>
                <Image source={iconConstants.notification} style={styles.ic_notification} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ic_notification: {
        height: 50,
        width: 50
    }
})