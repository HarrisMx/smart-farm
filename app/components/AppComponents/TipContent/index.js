import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';
import farming_tips from "../../../data/farming_tips";

function TipContent() {
  const {activeFarmingTips}  = useSelector(state => state.appReducer);

  return <View style={{flex: 1}}>
      <View style={styles.contImage}>
        <Image source={farming_tips['tips'][activeFarmingTips].img_path} style={{ height:170,flex: 1, resizeMode: 'cover', width: '100%', borderTopLeftRadius: 8, borderTopRightRadius:8}} />
      </View>
      <View style={styles.contText}>
        <Text style={styles.contTextCopy}>
        {farming_tips['tips'][activeFarmingTips].description}
        </Text>
      </View>
  </View>;
}

const styles = StyleSheet.create({
    contImage: {
        flex: 1
    },
    contText: {
        flex: 3,
        paddingTop: 10, 
        
    },
    contTextCopy: {
        lineHeight: 25,
    }
});

export default TipContent;
