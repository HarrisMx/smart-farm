import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function TipContent() {
  return <View style={{flex: 1}}>
      <View style={styles.contImage}>
        <Image source={require('../../assets/farmbg.jpg')} style={{ height:170,flex: 1, resizeMode: 'cover', width: '100%', borderTopLeftRadius: 8, borderTopRightRadius:8}} />
      </View>
      <View style={styles.contText}>
        <Text style={styles.contTextCopy}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in diam sit amet neque semper accumsan. In eu mollis tellus. Morbi ac lorem purus. Donec at velit massa. Ut hendrerit maximus sem, finibus hendrerit dolor vehicula imperdiet. Vestibulum orci turpis, mattis nec elit vitae, vestibulum ultricies risus. Ut mollis diam at odio scelerisque cursus. Maecenas fringilla leo a ex condimentum, finibus posuere mauris pharetra. In sapien nibh, blandit ac pretium sed, ornare nec sem. Quisque sed orci nisl. Sed eleifend dictum lectus. Ut commodo nulla vitae aliquet auctor. Proin metus urna, varius vitae aliquam sit amet, consequat at metus. Proin ornare nisi nec ultricies lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus euismod tincidunt.
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
