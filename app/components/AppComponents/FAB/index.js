import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppStrings } from '../../AppConfig/index';

export default function FAB(props) {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.openCamera}
            style={styles.touchableOpacityStyle}>
            <MaterialCommunityIcons name="video" color={AppStrings.color.white} size={30} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: '#E6BB05',
        borderRadius: 50,
    },
    touchableOpacityStyle: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  });
