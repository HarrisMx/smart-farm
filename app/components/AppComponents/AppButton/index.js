import React from 'react';
import {Text, TouchableHighlight, Alert } from 'react-native';
import { AppStyles, AppStrings } from '../../AppConfig/';

const AppButton = (props) => {
    return (<TouchableHighlight style={[AppStyles.buttonStyle, props.customStyle]} underlayColor={props.color} onPress={props.emailLogin}>
    <Text style={[AppStyles.buttonTextStyle]}>{props.buttonText}</Text>
</TouchableHighlight>);
}

export default AppButton;