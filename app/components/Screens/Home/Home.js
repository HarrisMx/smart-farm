import React from 'react';
import { View, Text, Button, TouchableOpacity, ToastAndroid,  ScrollView} from 'react-native';
import { WebView } from 'react-native-webview';
import CamModal from '../../AppComponents/Modal/CamModal';
import TipModal from '../../AppComponents/Modal/TipModal';
import { AppStyles, AppStrings } from '../../AppConfig/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAB from '../../AppComponents/FAB/';
import TempRead from '../../AppComponents/TemperatureRead/';
import Tip from '../../AppComponents/farmingTip/';
import TipContent from '../../AppComponents/TipContent/';
import { setUserLoggedIn, updateFarmingTips} from '../../../redux/userState/userActions';
import { useSelector, useDispatch } from 'react-redux';
import farming_tips from "../../../data/farming_tips";

import axios from 'axios';

const getWeather = () =>{
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    let lat = `53.2734`;
    let long = `-7.77832031`;
    let appid = `151c7bdfb19896f4b53b46c3fcff2b06`;

    axios({
        method: 'POST',
        url: `${baseUrl}lat=${lat}&lon=${long}&appid=${appid}`
    }).then((response) =>{
        ToastAndroid.show(response, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }).catch((err) =>{
        ToastAndroid.show(err, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    })
}
 
const getCurrentDate = () =>{

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let day = new Date().getDay();

    let _day = "";

    switch(day) {
        case 1:
            _day = "Sunday"
            break;
        case 2:
            _day = "Monday"
            break;
        case 3:
            _day = "Tuesday"
            break;
        case 4:
            _day = "Wednesday"
            break;
        case 5:
            _day = "Thursday"
            break;
        case 6:
            _day = "Friday"
            break;
        case 7:
            _day = "Saturday"
            break;
        default:
            return;
    }

    return [_day, ]
}

const Home = () => {
    const [visible, setVisible] = React.useState(false);
    const [isTipVisible, setIsTipVisible] = React.useState(false);

    const {userLogedIn, farmingTips}  = useSelector(state => state.appReducer);
    const dispatch = useDispatch();


    React.useEffect(() => {
        ToastAndroid.show("Rendered", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
        dispatch(setUserLoggedIn(true));
        dispatch(updateFarmingTips([{"title": "Growing peanuts", "description": "I am growing my peanuts", "img": "https:google"}]));
        //console.log(userLogedIn, farmingTips, farming_tips, typeof(farming_tips));
    }, []);

    return(
        <View style={{flex: 1, padding: 15}}>
            <TempRead />
            <View style={{paddingTop: 8, paddingBottom:0}}><Text style={{fontWeight: 'bold'}}>Farming tips:</Text></View>
            
            <View style={{width: '100%', height: '67%', justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView scrollEventThrottle={16} showsHorizontalScrollIndicator={false} horizontal={true}>
                   {
                      farming_tips['tips'].map((tip)=>(
                        <Tip openTipModal={() => setIsTipVisible(true)} id={tip.ïd} key={tip.ïd} title={tip.title} description={tip.description} imagePath={tip.img_path} />
                      ))
                   }
                </ScrollView>
            </View>
            
            <CamModal visible={visible}>
                <View style={{alignItems: 'center'}}>
                    <View style={AppStyles.modalHeader}>
                        <View style={AppStyles.modalHeaderText}><Text>Live Stream</Text></View>
                        <View style={AppStyles.modalHeaderIcon}><MaterialCommunityIcons name="video" color={AppStrings.color.primary} size={30} /></View>
                    </View>
                    <View style={AppStyles.camContainer}>
                        <WebView style={{width: 300}} source={{uri:'http://1dcb-41-112-166-104.ngrok.io'}} />
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