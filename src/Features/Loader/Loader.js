import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Loader() {
    return (
        // <View style={[styles.container, styles.horizontal]}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
                <ActivityIndicator size="large" color="#222222"  />
                <Text style={{ color: '#222222' }} >Loading</Text>
            </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        opacity: 0.7,
        //height: '100%',
        borderRadius: 12,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
