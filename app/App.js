import React from 'react';
import {Provider} from 'react-redux';
import { Text, View, StatusBar } from 'react-native';
import { AppStyles, AppStrings } from './components/AppConfig/';
import { Home, Login, History, Profile } from './components/Screens/';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Store from './redux/userState/store';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  /* return (
    
    <NavigationContainer>
      <StatusBar barStyle="light-content" animated={true} backgroundColor={AppStrings.color.primary}/>
      <Tab.Navigator initialRouteName="Home" activeColor="#fff" inactiveColor="#999" barStyle={{ backgroundColor: AppStrings.color.primary }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarColor: '#000',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} /> 
        )
      }}/>
      <Tab.Screen name="History" component={History} options={{
        tabBarColor: '#ccc',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="history" color={color} size={26} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarColor: '#ccc',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={26} />
        )
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
  ); */

  return (
    <Provider store={Store}>
      <View>
        <Login/>
      </View>
    </Provider>
  )
}

export default App;
