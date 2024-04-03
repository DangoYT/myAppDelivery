import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TouchableWithoutFeedback, BackHandler } from 'react-native';

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const animation = useState(new Animated.Value(-300))[0];
    const [data, setData] = useState(null);


    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const backAction = () => {
            if (isOpen) {
                closeMenu();
                return true; // Indica que hemos manejado el evento
            }
            return false; // Indica que no hemos manejado el evento y se propaga al sistema
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove(); // Limpiar el manejador al desmontar el componente
        fetchData();
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        Animated.timing(animation, {
            toValue: isOpen ? -300 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeMenu = () => {
        setIsOpen(false);
        Animated.timing(animation, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleSidebarPress = () => {
        // Evita que el evento de presión se propague al tocar dentro del sidebar
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleMenu} style={styles.button}>
                <Text style={styles.buttonText}>☰</Text>
            </TouchableOpacity>
            <Animated.View style={[styles.menu, { transform: [{ translateX: animation }] }]}>
                <TouchableWithoutFeedback onPress={handleSidebarPress}>
                    <View>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Option 1 pressed")}>
                            <Text>Opción 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Option 2 pressed")}>
                            <Text>Opción 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Option 3 pressed")}>
                            <Text>Opción 3</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {

    },
    buttonText: {
        fontSize: 20,
    },
    menu: {
        position: 'absolute',
        left: -10,
        top: 0,
        bottom: 0,
        width: 300,
        height: 800,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'red',
        paddingTop: 50,
        zIndex: 2,
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default SideMenu;
