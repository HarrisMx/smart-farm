import React from 'react';
import { View, Text, Button, TouchableOpacity,  ScrollView} from 'react-native';
import { WebView } from 'react-native-webview';
import CamModal from '../../AppComponents/Modal/CamModal';
import TipModal from '../../AppComponents/Modal/TipModal';
import { AppStyles, AppStrings } from '../../AppConfig/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAB from '../../AppComponents/FAB/';
import TempRead from '../../AppComponents/TemperatureRead/';
import Tip from '../../AppComponents/farmingTip/';
import TipContent from '../../AppComponents/TipContent/';
import fetch from 'node-fetch';

const Home = () => {
    const [visible, setVisible] = React.useState(false);
    const [isTipVisible, setIsTipVisible] = React.useState(false);
    const [streamUri, setStreamUri] = React.useState('http://1dcb-41-112-166-104.ngrok.io');

    const getUrl = async () => {
        let url = 'http://178.62.244.94:5001/api/streamUri';
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            ToastAndroid.show("Couldn't fetch stream URI", ToastAndroid.lONG, ToastAndroid.BOTTOM, 25, 50);
        }
        console.log(response.data.url);
        setStreamUri(response.data.url);
    }

    useEffect(()=>{
        getUrl();
    }, [])

    return(
        <View style={{flex: 1, padding: 15}}>
            <TempRead />
            <View style={{paddingTop: 8, paddingBottom:0}}><Text style={{fontWeight: 'bold'}}>Farming tips:</Text></View>
            
            <View style={{width: '100%', height: '67%', justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView scrollEventThrottle={16} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <Tip openTipModal={() => setIsTipVisible(true)} />
                    <Tip openTipModal={() => setIsTipVisible(true)} />
                    <Tip openTipModal={() => setIsTipVisible(true)} />
                </ScrollView>
            </View>
            
            <CamModal visible={visible}>
                <View style={{alignItems: 'center'}}>
                    <View style={AppStyles.modalHeader}>
                        <View style={AppStyles.modalHeaderText}><Text>Live Stream</Text></View>
                        <View style={AppStyles.modalHeaderIcon}><MaterialCommunityIcons name="video" color={AppStrings.color.primary} size={30} /></View>
                    </View>
                    <View style={AppStyles.camContainer}>
                        <WebView style={{width: 300}} source={{uri:{streamUri}}} />
                    </View>
                    <View style={AppStyles.camClose}>

                        <Button touchSoundDisabled color={AppStrings.color.primary} title="Close" onPress={()=>setVisible(false)}/>
                    </View>
                </View>
            </CamModal>

            <TipModal visible={isTipVisible}>
                <View style={[AppStyles.modalHeader]}>
                    <View style={AppStyles.tipModalHeaderIcon}><MaterialCommunityIcons name="lightbulb-on-outline" color={AppStrings.color.primary} size={30} /></View>
                    <View style={AppStyles.tipModalHeaderText}>
                        <TouchableOpacity onPress={() => setIsTipVisible(false)}>
                            <MaterialCommunityIcons name="close" color={AppStrings.color.primary} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AppStyles.modalBody}>
                    <ScrollView scrollEventThrottle={16}>
                        <TipContent/>
                    </ScrollView>
                </View>
            </TipModal>

            <FAB openCamera={()=>setVisible(true)}/>
        </View>
    )
}

export default Home;