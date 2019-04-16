import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default DetailScreen;