import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AppStrings } from '../../AppConfig/index';

export default function TemperatureRead() {
    return (
        <View>
            <View style={styles.tempInfo}>
                <View >
                    <Text style={styles.tempReadText}>23 &deg;C {"\n"}</Text>
                    <Text style={styles.dateTime}>16:30 Friday, June 22</Text>
                </View>
                <View>
                   <Text style={styles.locationText}>Pretoria</Text> 
                </View>
            </View>
            <View style={styles.tempInfo}>
                <View>
                
                </View>
                <View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 30,
        width: '80%',
        backgroundColor: AppStrings.color.primary,
        borderRadius: 10,
        padding: 3
    },
    tempInfo: {
        flex: 1,
        flexDirection: 'column',
    },
    dateTime: {

    },
    tempReadText: {

    },
    locationText: {
        
    }
})