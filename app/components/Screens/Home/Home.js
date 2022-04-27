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
import { updateTemperature, updateDate} from '../../../redux/userState/userActions';
import { useSelector, useDispatch } from 'react-redux';
import farming_tips from "../../../data/farming_tips";
 

const Home = () => {
    const [visible, setVisible] = React.useState(false);
    const [isTipVisible, setIsTipVisible] = React.useState(false);

    const {userLogedIn, farmingTips, activeFarmingTips}  = useSelector(state => state.appReducer);
    const dispatch = useDispatch();

    const getCurrentDate = () =>{

        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let day = new Date().getDay();
        let _month = "";

        switch(month) {
            case 1:
                _month = "Jan"
                break;
            case 2:
                _month = "Feb"
                break;
            case 3:
                _month = "Mar"
                break;
            case 4:
                _month = "Apr"
                break;
            case 5:
                _month = "May"
                break;
            case 6:
                _month = "Jun"
                break;
            case 7:
                _month = "Jul"
                break;
            case 8:
                _month = "Aug"
                break;
            case 9:
                _month = "Sept"
                break;
            case 10:
                _month = "Oct"
                break;
            case 11:
                _month = "Nov"
                break;
            case 12:
                _month = "Dec"
                break;
            default:
                return;
        }
    
        let _day = "";
    
        switch(day) {
            case 7:
                _day = "Sunday"
                break;
            case 1:
                _day = "Monday"
                break;
            case 2:
                _day = "Tuesday"
                break;
            case 3:
                _day = "Wednesday"
                break;
            case 4:
                _day = "Thursday"
                break;
            case 5:
                _day = "Friday"
                break;
            case 6:
                _day = "Saturday"
                break;
            default:
                return;
        }
    
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes();
        
        let _date =  `${time} ${_day}, ${_month} ${year}`;

        dispatch(updateDate(_date));
    }

    const getWeather = () =>{
        try {
            const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;
            let lat = `-26.041788`;
            let long = `27.956558`;
            let appid = `151c7bdfb19896f4b53b46c3fcff2b06`;
    
            let _url = `${baseUrl}lat=${lat}&lon=${long}&appid=${appid}`;
            
            let temp = new Object();
            
            fetch(_url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json()).then((response) =>{
                let temp_min = response.main.temp_min;
                let temp_max = response.main.temp_max;
                let icon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
                let curr_temp = response.main.feels_like;
                let name = response.name;
                temp = {
                    temp_min: Math.round((temp_min-  273.15)),
                    temp_max: Math.round((temp_max-  273.15)),
                    icon: icon,
                    curr_temp: Math.round((curr_temp-  273.15)),
                    name: name
                }
                dispatch(updateTemperature(temp));
                //ToastAndroid.show(response, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            }).catch((err) =>{
                console.log(err);
            //ToastAndroid.show(err, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            });
        } catch (error) {
            ToastAndroid.show(error, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
        }
    }

    const getStreamURI = () => {
        fetch("", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((response) =>{
            console.log(response);
            let uri = null;
            dispatch(updateStreamingUri(uri));
            //ToastAndroid.show(response, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
        }).catch((err) =>{
            ToastAndroid.show(err, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
        });
    }

    React.useEffect(() => {
        getWeather();
        getCurrentDate();
    }, []);

    return(
        <View style={{flex: 1, padding: 15}}>
            <TempRead />
            <View style={{paddingTop: 8, paddingBottom:0}}><Text style={{fontWeight: 'bold'}}>Farming tips:</Text></View>
            
            <View style={{width: '100%', height: '67%', justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView scrollEventThrottle={16} showsHorizontalScrollIndicator={false} horizontal={true}>
                   {
                      farming_tips['tips'].map((tip)=>(
                        <Tip openTipModal={() => setIsTipVisible(true)} id={tip.id} key={tip.id} title={tip.title} description={tip.description} imagePath={tip.img_path} />
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