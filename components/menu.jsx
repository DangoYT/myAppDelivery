import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MiNav from './nav.jsx';

const MiComponenteMenu = () => {

    const closeMenu = () => {
        setIsOpen(false);
        Animated.timing(animation, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <MiNav />
            <Text>Mi ComponenteMenu</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MiComponenteMenu;
