import React, {useState} from 'react';
import {View, Text, Image, TextInput, ImageBackground, ToastAndroid} from 'react-native';
import { AppStyles, AppStrings } from '../../AppConfig/';
import userImage from '../../assets/userlogin.png';
import backgroundImage from '../../assets/farmbg.jpg';
import AppButton from '../../AppComponents/AppButton';
import { setUserLoggedIn, updateFarmingTips} from '../../../redux/userState/userActions';
import { useSelector, useDispatch } from 'react-redux';

const loginWithGoogle = () => {
  ToastAndroid.show("Login with google", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
}

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {userLogedIn, farmingTips}  = useSelector(state => state.appReducer);
  const dispatch = useDispatch();

  const loginWithEmail = () => {
    ToastAndroid.show(username + ' ' + password, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
  }
  
return (    
      <View style={AppStyles.mainContainer}>
        <View  style={{backgroundColor: "#000", opacity:0.7, position: "absolute", width: "100%", height: "100%", left: 0, top: 0, zIndex:10}}></View>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1}}>
        <View style={AppStyles.loginTitleSections}>
          <Image style={{width:90, height:90}} source={userImage}/>
          <Text style={AppStyles.loginTextStyles}>{AppStrings.text.loginTitle}</Text>
        </View>
        <View style={AppStyles.formContainer}>
          <View style={AppStyles.loginForm}>
            <TextInput placeholder="Username" onChangeText={(value)=> setUsername(value)} keyboardType="email-address" style={AppStyles.inputField}/>
            <TextInput placeholder="Password" onChangeText={(value) => setPassword(value)} keyboardType="password" secureTextEntry={true} keyboardType="default" style={AppStyles.inputField}/>
            <AppButton buttonText="Submit" customStyle={{backgroundColor: AppStrings.color.primary}} emailLogin = {loginWithEmail}/>
            <AppButton customStyle={{marginTop: 10, backgroundColor: AppStrings.color.googleButton}} buttonText="Google" emailLogin = {loginWithGoogle}/>
          </View>
        </View>
        </ImageBackground>
      </View>
  );
  
}

export default Login;