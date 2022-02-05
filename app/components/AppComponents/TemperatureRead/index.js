import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AppStrings } from '../../AppConfig/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TemperatureRead() {
    return (
        <View style={styles.container}>
           <View style={styles.tempInfo}>
                <View style={{flex: 1,flexDirection: 'column', alignItems: 'center', paddingTop: 10,height:70}}>
                    <Text style={[styles.tempReadText, {paddingBottom: 10} ]}>23 &deg;C </Text>
                    <Text style={styles.dateTime}>16:30 Friday, June 22</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 20, paddingTop: 10, alignContent: 'center'}}>
                    <Text style={styles.locationText}>Pretoria</Text> 
                    
                </View>
            </View>
            <View style={styles.tempVals}>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <Text>Low</Text>
                    <MaterialCommunityIcons name="thermometer-low" color={AppStrings.color.white} size={30} />
                </View>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <Text>High</Text>
                    <MaterialCommunityIcons name="thermometer-high" color={AppStrings.color.white} size={30} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: AppStrings.color.white,
        borderRadius: 10,
        padding: 3,
        elevation: 15,
        position: 'relative',
    },
    tempVals: {
        backgroundColor: AppStrings.color.primary,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 7,
        top: 5,
        height: 50,
        marginBottom: 5
    },
    tempInfo: {
        flexDirection: 'row',
    },
    dateTime: {
        color: AppStrings.color.orange,
    },
    tempReadText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppStrings.color.primary,
        fontFamily: 'Helvetica Neue',
    },
    locationText: {
        color: AppStrings.color.orange,

    }
})