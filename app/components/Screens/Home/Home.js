import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import CamModal from '../../AppComponents/Modal/CamModal';
import { AppStyles, AppStrings } from '../../AppConfig/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAB from '../../AppComponents/FAB/';
import TempRead from '../../AppComponents/TemperatureRead/';

const Home = () => {
    const [visible, setVisible] = React.useState(false);
    return(
        <View style={{flex: 1}}>
            
            <CamModal visible={visible}>
                <View style={{alignItems: 'center'}}>
                    <View style={AppStyles.modalHeader}>
                        <View style={AppStyles.modalHeaderText}><Text>Live Stream</Text></View>
                        <View style={AppStyles.modalHeaderIcon}><MaterialCommunityIcons name="camera" color={AppStrings.color.primary} size={30} /></View>
                    </View>
                    <View style={AppStyles.camContainer}>
                        <WebView style={{width: 300}} source={{uri:'https://www.youtube.com/'}} />
                    </View>
                    <View style={AppStyles.camClose}>
                        {/* <AppButton buttonText="Close"/> */}
                        <Button touchSoundDisabled color={AppStrings.color.primary} title="Close" onPress={()=>setVisible(false)}/>
                    </View>
                </View>
            </CamModal>
            {/* <Button title="Open Modal" onPress={()=>setVisible(true)}/> */}
            {/* <TouchableOpacity onPress={()=>setVisible(true)}>
                <MaterialCommunityIcons name="camera" color={AppStrings.color.primary} size={30} />
            </TouchableOpacity> */}
            <TempRead/>
            <FAB openCamera={()=>setVisible(true)}/>
        </View>
    )
}

export default Home;