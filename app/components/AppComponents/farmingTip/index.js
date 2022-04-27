import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AppStrings } from '../../AppConfig/index';
import AppButton from '../AppButton/';
import { Card } from 'react-native-material-ui';
import { useDispatch } from 'react-redux';
import { updateActiveFarmingTips } from '../../../redux/userState/userActions';

const Tip = (props) => {
    const dispatch = useDispatch();

    const doActions = () =>{
        props.openTipModal()
        dispatch(updateActiveFarmingTips(props.id));
    }

  return <View style={styles.container}>
      <View style={styles.image}>
          <Image source={props.imagePath} style={{ flex: 1, resizeMode: 'cover', width: '100%', borderTopLeftRadius: 8, borderTopRightRadius:8}} />
      </View>
      <View style={styles.cta}>
          <View style={{flex: 1}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, fontFamily: 'roboto'}}>{props.title}</Text>
          </View>
          <View style={{flex: 1}}>
          <TouchableOpacity  style={styles.ctaButton} onPress={doActions}>
            <Text style={{color: 'white', textTransform: 'uppercase'}}>Read More</Text>
            </TouchableOpacity>
          </View>
      </View>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: 300,
        height: 310,
        backgroundColor: AppStrings.color.primary,
        margin: 10,
        elevation: 5
    },
    image: {
        flex: 2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cta: {
        flex: 1,
        padding: 10
    },
    ctaButton: {
        width: 100, 
        height: 35, 
        backgroundColor: AppStrings.color.orange, 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
    }
});

export default Tip;