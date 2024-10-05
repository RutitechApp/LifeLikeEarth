import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BannerTypes } from '../helper/dummyData'
import colors from '../utils/colors'

const CategoryView = () => {
    const [selectedType, setSelectedType] = useState(1)
    const CustomCategoryView = ({ type }) => {
        return (
            <Text style={[styles.itemsTextTitle, { color: selectedType === type.id ? colors.blue : colors.white }]} onPress={() => setSelectedType(type?.id)}>
                {type.title}
            </Text>
        )
    }

    return (
        <View style={styles.constainer}>
            <FlatList
                data={BannerTypes}
                renderItem={({ item }) => <CustomCategoryView type={item} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.typeSepratior} />
                    )
                }}
            />
        </View>
    )
}

export default CategoryView

const styles = StyleSheet.create({
    constainer: {
        marginVertical: 10,
    },
    itemsTextTitle: {
        color: colors.white,
        fontSize: 20
    },
    typeSepratior: { width: 20, height: '100%' }
})