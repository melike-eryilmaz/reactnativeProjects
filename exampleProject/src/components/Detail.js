import React from 'react';
import {Text,View,Image, Linking} from 'react-native';
import Button from './Button';
const Detail = (props) => {
    const {containerStyle,subContainerStyle,imageStyle,titleStyle} = styles;
    return (
        <View style={containerStyle}>
             <View style={subContainerStyle}>
                 <Text style={titleStyle}>{props.data.title}</Text>
             </View>
             <View style={subContainerStyle}>
                <Image style={imageStyle} source={{uri:props.data.thumbnailUrl}}/>
             </View>
             <View style={subContainerStyle}>
                 {/* <Button onPress={()=>console.log('Butona tıklandı.')}>buy ıt</Button> */}
                 <Button onPress={()=>Linking.openURL(props.data.url)}>Buy It!</Button>

             </View>



        </View>
        // <Text>{props.data.title}</Text>
    )
}
const styles={
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadiusİ:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    },
    subContainerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#ffff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    },
    imageStyle:{
        height:300,
        flex:1//view in tüm alanını kapla demektir.
    },
    titleStyle:{
        fontSize:18
    }

};
export default Detail;
