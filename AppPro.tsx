import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'


    return (

        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                i love you
            </Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: "#FFFFFF"
    },
    darkText: {
        color: "#000000"
    }
})



export default AppPro;