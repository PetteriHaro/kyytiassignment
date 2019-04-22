import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Logo from '../../../assets/images/kyyti-logo.png'

const topImage = () => (
    <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={Logo} style={styles.image} />
    </View>
)

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 50,
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default topImage;