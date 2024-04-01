import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Modal } from 'react-native';
import MiSideMenu from './sideMenu.jsx';

const Nav = () => {
    return (
        <View style={styles.nav}>
            <MiSideMenu />
            <Text style={styles.text}>Ruta del día</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#FFD8B7',
        padding: 10,
        paddingTop: 50,
        height: 100,
        width: 395,
        top: 0,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#FF6900',
        fontSize: 20,
        zIndex: -1,
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default Nav;
